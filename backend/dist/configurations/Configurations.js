"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(require("../utils/Logger"));
const mongoose_1 = require("mongoose");
const port = Number(process.env.SERVER_PORT);
const env = process.env.NODE_ENV;
const mongodbUrl = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_DB_NAME;
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const uri = mongodbUrl + dbName;
    try {
        yield (0, mongoose_1.connect)(uri);
        Logger_1.default.info('Successfully connected to the Database');
    }
    catch (error) {
        Logger_1.default.error('Error while trying to connect to Database'.toUpperCase(), error);
        process.exit();
    }
});
const connectToPort = (app) => {
    app.listen(port, () => {
        Logger_1.default.info(`server started at http://localhost:${port}`);
        if (env === 'development') {
            Logger_1.default.warn(`Server running in development mode!`.toUpperCase());
        }
    });
};
exports.default = {
    connectToPort,
    connectToDatabase
};
//# sourceMappingURL=Configurations.js.map