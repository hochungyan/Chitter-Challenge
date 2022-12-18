import express from 'express';

export const router = express.Router();

import UserModel from '../models/Users.js';

router.route(`/`)
    .post((req, res) => {
        const { email } = req.body;

        UserModel.findOne({ email }, (err, user) => {
            if (user) {
                res.send({ message: `user error, check your detail again` });
            }
            else {
                const user = new UserModel(req.body);
                user.save(err => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send({ message: `successful` });
                    }
                });
            }
        });
    });

