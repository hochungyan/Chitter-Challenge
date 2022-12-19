import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import { router as getPeeps } from './routes/getPeeps.js';
import { router as createPeep } from './routes/createPeep.js';
import { router as createUser } from './routes/createUser.js';
import { router as login } from './routes/login.js';
import { router as register } from './routes/register.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const port = 3006;
const host = process.env.HOST;

const main = async () => {
    await mongoose.connect(process.env.DB_URI);
}

main().catch(error => console.log(error));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", getPeeps);
app.use("/createPeep", createPeep);
app.use("/createUser", createUser);
app.use("/login", login);
app.use("/register", register);
/*app.use() method is used to add a route to the app that maps the "login" URL path to the login function. 
This means that when a client makes a request to the "login" URL, the app will call the login function to handle the request. 
The login function is a callback that takes the request and response objects 
as arguments and uses them to process the request and generate a response. */


const server = app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
});

export default server;