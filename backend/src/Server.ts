import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Logger from './utils/Logger'
import MorganMiddleware from './middlewares/MorganMiddleware'
import StatusCode from './configurations/StatusCode'
import { notFound, errorHandler } from './middlewares/Middleware'


const app = express()
const port = process.env.SERVER_PORT

// Middlewares
const allowedOrigins = ['http://localhost:3000']
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE']

const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: allowedMethods
}

app.use(cors(options))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(MorganMiddleware)
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(StatusCode.OK).send('API is Alive with TypeScript!')
})

app.use(notFound)

app.listen(port, () => {
    Logger.info(`server started at http://localhost:${ port }`)
})

export default app;
