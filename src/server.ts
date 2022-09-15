import "reflect-metadata"
import express from 'express';
import "./database"

import { createConnectionn } from "./database"

import "./shared/container"
import { router } from './routes'

createConnectionn()

const app = express();
app.use(express.json());


app.use(router)

app.listen(3333, () => {
    console.log('Server Running');
})