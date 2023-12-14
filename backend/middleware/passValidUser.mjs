import https_codes from "../config/http_code.mjs";
import userSchema from '../models/User.mjs'
import configs from "../config/config.mjs";
import jsonwebtoken from 'jsonwebtoken';

const jwt = jsonwebtoken;

export async function passValidUser(req, res, next) {

    try {
        let token = req.headers['authorization'];
        token = token.split(' ')[1];

        const id = jwt.decode(token, configs.JWT_SECRET);
        if (!id) return res.status(https_codes.BAD_REQUEST).json({ error: "Incorrect token is provided" });

        const user = await userSchema.findById(id.user_id).select('-password');
        if (!user) return res.status(https_codes.BAD_REQUEST).json({ error: "Incorrect token is provided" });

        req.user = user;
        next();
        
    } catch (error) {
        console.error('error from passValidUser\'s catch statement:', error);
        return res.status(https_codes.SERVER_ERROR).json({ error: "error from server." });
    }

}