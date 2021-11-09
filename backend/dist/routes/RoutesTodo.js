"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MyTodoController_1 = __importDefault(require("../controllers/MyTodoController"));
const todosUrl = '/Todos';
const todoByIdUrl = `${todosUrl}/:id`;
const findByDay = '/findByDay';
const routes = (app) => {
    app.post(todosUrl, MyTodoController_1.default.createTodos);
    app.get(todosUrl, MyTodoController_1.default.todoList);
    app.get(todoByIdUrl, MyTodoController_1.default.todoById);
    app.get(findByDay, MyTodoController_1.default.findTodoByQuery);
    app.put(todoByIdUrl, MyTodoController_1.default.updateTodos);
    app.delete(todoByIdUrl, MyTodoController_1.default.deleteTodos);
};
exports.default = {
    routes
};
//# sourceMappingURL=RoutesTodo.js.map