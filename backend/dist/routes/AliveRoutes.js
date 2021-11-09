"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCode_1 = __importDefault(require("../configurations/StatusCode"));
const routes = (app) => {
    app.get('/', (req, res) => {
        res.status(StatusCode_1.default.OK).send('API is Alive with TypeScript!');
    });
};
exports.default = {
    routes
};
//# sourceMappingURL=AliveRoutes.js.map