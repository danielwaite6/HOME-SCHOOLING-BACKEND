import "reflect-metadata"
import express from 'express';
//import cors from 'cors';
//import "./database"

import createDbConnection from "./database"

import "./shared/container"
import { router } from './routes'

createDbConnection()

const app = express();
app.use(express.json());

//app.use(cors({ origin: true, credentials: true }));

app.use(router)

app.listen(3333, () => {
    console.log('Server Running');
})