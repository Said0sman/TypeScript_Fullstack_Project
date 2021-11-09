"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const MorganMiddleware_1 = __importDefault(require("../middlewares/MorganMiddleware"));
const Middleware_1 = require("../middlewares/Middleware");
// Middlewares
const allowedOrigins = ['*'];
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
const options = {
    origin: allowedOrigins,
    methods: allowedMethods
};
const ApplyMiddlewares = (app) => {
    app.use((0, cors_1.default)(options));
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json());
    app.use(MorganMiddleware_1.default);
    app.use(Middleware_1.errorHandler);
};
exports.default = ApplyMiddlewares;
//# sourceMappingURL=ApplyMiddlewares.js.map