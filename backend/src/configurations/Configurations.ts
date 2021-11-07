import {Express} from "express";
import Logger from "../utils/Logger";


const port = process.env.SERVER_PORT

const connectToPort = (app: Express) => {
    app.listen(port, () => {
        Logger.info(`server started at http://localhost:${ port }`)
    })
}

export default {
    connectToPort
}