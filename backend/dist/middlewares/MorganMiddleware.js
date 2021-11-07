"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const Logger_1 = __importDefault(require("../utils/Logger"));
const stream = {
    write: (message) => Logger_1.default.http(message),
};
const skip = () => {
    const env = process.env.NODE_ENV || "development";
    return env !== "development";
};
const MorganMiddleware = (0, morgan_1.default)(":method :url :status :res[content-length] - :response-time ms", { stream, skip });
exports.default = MorganMiddleware;
//# sourceMappingURL=MorganMiddleware.js.map