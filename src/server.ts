import "reflect-metadata"
import "./shared/container"
//import "../src/shared/container"
import express from 'express';
import cors from "cors";
//import "./database"
import { dataSource } from "./database"
import { router } from './routes'


dataSource.initialize().then(() => {
    const app = express();
    app.use(express.json());
    app.use(cors({ origin: true, credentials: true }));
    app.use(router)

    return app.listen(3333, () => {
        console.log('Server Running');
    })
})




//createConnection()

