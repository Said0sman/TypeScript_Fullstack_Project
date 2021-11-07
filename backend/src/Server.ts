import express from 'express'
import Logger from './utils/Logger'
import StatusCode from './configurations/StatusCode'
import { notFound} from './middlewares/Middleware'
import ApplyMiddlewares from "./configurations/ApplyMiddlewares";
import Configurations from "./configurations/Configurations";


const app = express()

ApplyMiddlewares(app)


app.get('/', (req, res) => {
    res.status(StatusCode.OK).send('API is Alive with TypeScript!')
})

app.use(notFound)


Configurations.connectToPort(app)
export default app;
