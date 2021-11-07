import express from 'express'
import { notFound} from './middlewares/Middleware'
import ApplyMiddlewares from "./configurations/ApplyMiddlewares";
import Configurations from "./configurations/Configurations";
import AliveRoutes from "./routes/AliveRoutes";


const app = express()

ApplyMiddlewares(app)

AliveRoutes.routes(app)
app.use(notFound)


Configurations.connectToPort(app)
Configurations.connectToDatabase().then()
export default app;
