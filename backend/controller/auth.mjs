import userSchema from '../models/User.mjs';
import hc from '../config/http_code.mjs'
import https_codes from '../config/http_code.mjs';
import configs from '../config/config.mjs';
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken';

const jwt = jsonwebtoken

// CREATE Operation for User
export async function signupController(req, res) {

    try {
        const salt = await bcrypt.genSalt(configs.SALT_ROUND);
        const passwordHash = await bcrypt.hash(req.body.password, salt);
        const data = { name: req.body.name, email: req.body.email, password: passwordHash };

        userSchema.create(data).then((user) => {
            const authToken = jwt.sign({ user_id: user._id }, configs.JWT_SECRET, { expiresIn: '2d' });
            return res.status(hc.SUCCESS).json({ success: true, authToken });

        }).catch((error) => {
            if (error.code === 11000 || error.code === 11001) {
                console.error('Duplicate email');
                return res.status(https_codes.CONFLICT_ERROR).json({ success: false, error: "Email address is already taken" });
            }
            else {
                console.error('error on signing-up user: ');
                return res.status(https_codes.SERVER_ERROR).json({ success: false, error: "Error from server on creating account" });
            }
        })
    } catch (error) {
        console.error('error on signing-up user: ', error);
        return res.status(https_codes.SERVER_ERROR).json({ success: false, error: "Error from server on signup" });
    }
}

// READ Operation for User

export async function loginController(req, res) {

    try {
        const user = await userSchema.findOne({ email: req.body.email });
        if (!user) return res.status(https_codes.NOT_FOUND_ERROR).json({ success: false, error: "Incorrect credentials" });

        const compareResults = await bcrypt.compare(req.body.password, user.password);
        if (!compareResults) return res.status(https_codes.UNAUTH_ERROR).json({ success: false, error: "Incorrect credentials" });

        const authToken = jwt.sign({ user_id: user._id }, configs.JWT_SECRET, { expiresIn: '2d' });
        return res.status(https_codes.SUCCESS).json({ success: true, authToken });

    } catch (error) {
        console.error('error on logging-in user: ', error);
        return res.status(https_codes.SERVER_ERROR).json({ success: false, error: "error from server on login" });
    }
}