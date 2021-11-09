"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Middleware_1 = require("./middlewares/Middleware");
const ApplyMiddlewares_1 = __importDefault(require("./configurations/ApplyMiddlewares"));
const Configurations_1 = __importDefault(require("./configurations/Configurations"));
const AliveRoutes_1 = __importDefault(require("./routes/AliveRoutes"));
const RoutesTodo_1 = __importDefault(require("./routes/RoutesTodo"));
const app = (0, express_1.default)();
(0, ApplyMiddlewares_1.default)(app);
AliveRoutes_1.default.routes(app);
RoutesTodo_1.default.routes(app);
app.use(Middleware_1.notFound);
Configurations_1.default.connectToPort(app);
Configurations_1.default.connectToDatabase().then();
exports.default = app;
//# sourceMappingURL=Server.js.map