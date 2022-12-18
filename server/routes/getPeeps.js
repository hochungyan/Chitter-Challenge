import express from 'express';
import PeepModel from '../models/Peeps.js';

export const router = express.Router();

router.get('/getPeeps', (req, res) => {
    PeepModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});