"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Logger_1 = __importDefault(require("./utils/Logger"));
const MorganMiddleware_1 = __importDefault(require("./middlewares/MorganMiddleware"));
const StatusCode_1 = __importDefault(require("./configurations/StatusCode"));
const Middleware_1 = require("./middlewares/Middleware");
const app = (0, express_1.default)();
const port = process.env.PORT;
// Middlewares
const allowedOrigins = ['http://localhost:3000'];
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
const options = {
    origin: allowedOrigins,
    methods: allowedMethods
};
app.use((0, cors_1.default)(options));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(MorganMiddleware_1.default);
app.use(Middleware_1.errorHandler);
app.get('/', (req, res) => {
    res.status(StatusCode_1.default.OK).send('API is Alive with TypeScript!');
});
app.use(Middleware_1.notFound);
app.listen(port, () => {
    Logger_1.default.info(`server started at http://localhost:${port}`);
});
exports.default = app;
//# sourceMappingURL=Server.js.map