"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFound = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const StatusCode_1 = __importDefault(require("../configurations/StatusCode"));
dotenv_1.default.config();
const env = process.env.NODE_ENV;
// Own made middlewares
const notFound = (req, res, next) => {
    const error = new Error(`Not Found: ${req.originalUrl}`);
    res.status(StatusCode_1.default.NOT_FOUND);
    next(error);
};
exports.notFound = notFound;
const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        statusCode,
        message: error.message,
        stackTrace: env === 'development' ? error.stack : 'lol'
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=Middleware.js.map