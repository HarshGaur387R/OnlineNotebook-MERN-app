import express from 'express';
import { loginController, signupController } from '../controller/auth.mjs';
import { body, validationResult } from 'express-validator';
import https_codes from '../config/http_code.mjs';

const authRoute = express.Router();

// ROUTE 1 : Login user
authRoute.post('/login', [
    body("email", 'Enter a valid email').isEmail(),
    body("password", 'Password must be atleast 8 characters').isLength({ min: 8 })
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(https_codes.BAD_REQUEST).json({ error: errors.array() });
    }
    next();
}, loginController);

// ROUTE 2 : Signup user
authRoute.post('/signup', [
    body("name", 'Enter a valid name').isLength({ min: 3 }),
    body("email", 'Enter a valid email').isEmail(),
    body("password", 'Password must be atleast 8 characters').isLength({ min: 8 })
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(https_codes.BAD_REQUEST).json({ error: errors.array() });
    }
    next();
}, signupController);

export default authRoute;