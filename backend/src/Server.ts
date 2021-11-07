import express from 'express'
import Logger from './utils/Logger'
import StatusCode from './configurations/StatusCode'
import { notFound} from './middlewares/Middleware'
import ApplyMiddlewares from "./configurations/ApplyMiddlewares";


const app = express()
const port = process.env.SERVER_PORT
ApplyMiddlewares(app)


app.get('/', (req, res) => {
    res.status(StatusCode.OK).send('API is Alive with TypeScript!')
})

app.use(notFound)

app.listen(port, () => {
    Logger.info(`server started at http://localhost:${ port }`)
})

export default app;
