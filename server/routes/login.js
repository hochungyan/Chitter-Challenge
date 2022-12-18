import express from 'express';
import UserModel from '../models/Users.js';

export const router = express.Router();

router.post('/', (req, res) => {
    const { email, password } = req.body;

    UserModel.findOne({ email }, (err, user) => {
        if (user && password === user.password) {
            res.send({ message: `Login Success! Welcome to Chitter App!`, user });
        }
        else {
            res.send({ message: `Login Error: Please check username and password` });
        }
    });
});