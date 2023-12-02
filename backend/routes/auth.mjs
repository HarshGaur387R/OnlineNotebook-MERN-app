import express from 'express';

const authRoute = express.Router();

authRoute.get('/login',(req, res)=>{
    res.send('user login');
})

export default authRoute;