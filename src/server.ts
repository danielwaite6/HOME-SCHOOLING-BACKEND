import "reflect-metadata"
import cors from "cors";
import express from 'express';
//import "./database"
import { createConnection } from "./database"
import "./shared/container"
import { router } from './routes'


const app = express();

app.use(express.json());
app.use(cors());
app.use(router)



createConnection()

app.listen(3333, () => {
    console.log('Server Running');
})