import express from 'express';
import PeepModel from '../models/Peeps.js';

export const router = express.Router();

router.post('/', async (req, res) => {
    const peep = req.body;
    const newPeep = new PeepModel(peep);

    await newPeep.save()
        .then(peep => {
            res.status(200).json(peep);
        })
        .catch(err => res.status(400).send(err.message));
});