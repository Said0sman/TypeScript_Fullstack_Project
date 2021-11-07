import cors from "cors";
import express from "express";
import MorganMiddleware from "../middlewares/MorganMiddleware";
import {errorHandler} from "../middlewares/Middleware";
import { Express } from "express-serve-static-core";


// Middlewares
const allowedOrigins = ['http://localhost:3000']
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE']

const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: allowedMethods
}

const ApplyMiddlewares = (app: Express) =>  {
    app.use(cors(options))
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    app.use(MorganMiddleware)
    app.use(errorHandler)
}
export default ApplyMiddlewares;

