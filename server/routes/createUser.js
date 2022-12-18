import express from 'express';
import UserModel from '../models/Users.js';

export const router = express.Router();

router.post('/', async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);

    await newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => res.status(400).send(err.message));
});