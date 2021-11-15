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
const MyTodoModel_1 = __importDefault(require("../models/MyTodoModel"));
const Logger_1 = __importDefault(require("../utils/Logger"));
const StatusCode_1 = __importDefault(require("../configurations/StatusCode"));
// Create Todos in the List
const createTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    Logger_1.default.http(req.body);
    const { text, day } = req.body;
    const todos = new MyTodoModel_1.default({
        text,
        day,
    });
    Logger_1.default.debug(todos);
    try {
        const response = yield todos.save();
        Logger_1.default.debug(response);
        res.status(StatusCode_1.default.OK).send(response);
        res.status(StatusCode_1.default.CREATED).send(response);
    }
    catch (error) {
        res.status(StatusCode_1.default.INTERNAL_SERVER_ERROR)
            .send({ message: error.message });
    }
});
// Find Todos List
const todoList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield MyTodoModel_1.default.find();
        Logger_1.default.debug(response);
        res.status(StatusCode_1.default.OK).send(response);
    }
    catch (error) {
        res.status(StatusCode_1.default.INTERNAL_SERVER_ERROR)
            .send({ message: error.message });
    }
});
// Get Todos By the Id
const todoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { todoId } = req.params;
        Logger_1.default.http(`todoId: ${todoId}`);
        const response = yield MyTodoModel_1.default.findById(todoId);
        Logger_1.default.debug(response);
        res.status(StatusCode_1.default.OK).send(response);
    }
    catch (error) {
        res.status(StatusCode_1.default.INTERNAL_SERVER_ERROR)
            .send({
            message: `Error occurred while trying to accesses todo with ID: ${req.params.todoId}`,
            error: error.message
        });
    }
});
// Find Todos with Day
const findTodoByQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text } = req.query;
        Logger_1.default.http(`text: ${text}`);
        const query = { text: String(text) };
        const response = yield MyTodoModel_1.default.find(query);
        Logger_1.default.debug(response);
        response.length !== 0
            ? res.status(StatusCode_1.default.OK).send(response)
            : res.status(StatusCode_1.default.NOT_FOUND).send({
                message: `Couldn't find any todo from list: ${text}`
            });
    }
    catch (error) {
        res.status(StatusCode_1.default.INTERNAL_SERVER_ERROR)
            .send({
            message: `Error occurred while trying to accesses todo with ID: ${req.params.todoId}`,
            error: error.message
        });
    }
});
// Update Todos in the List
const updateTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { todoId } = req.params;
        Logger_1.default.http(`todoId: ${todoId}`);
        const { text, day } = req.body;
        Logger_1.default.http(`req.body: ${req.body}`);
        if (!req.body) {
            res.status(StatusCode_1.default.BAD_REQUEST)
                .send({ message: `Cant update without ID` });
        }
        const response = yield MyTodoModel_1.default.findByIdAndUpdate(todoId, {
            text,
            day
        }, { new: true });
        Logger_1.default.debug(response);
        res.status(StatusCode_1.default.OK).send(response);
    }
    catch (error) {
        res.status(StatusCode_1.default.INTERNAL_SERVER_ERROR)
            .send({
            message: `Error occurred while trying to update todo with ID: ${req.params.todoId}`,
            error: error.message
        });
    }
});
// Delete Todos in the List
const deleteTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { todoId } = req.params;
        const response = yield MyTodoModel_1.default.findByIdAndDelete(todoId);
        res.status(StatusCode_1.default.OK).send({
            message: `Successfully deleted todo from list: ${response.text} and ID: ${todoId}`
        });
    }
    catch (error) {
        res.status(StatusCode_1.default.INTERNAL_SERVER_ERROR)
            .send({
            message: `Error occurred while trying to delete todo from list: ${req.params.todoId}`,
            error: error.message
        });
    }
});
// Exports
exports.default = {
    createTodos,
    todoList,
    todoById,
    findTodoByQuery,
    updateTodos,
    deleteTodos
};
//# sourceMappingURL=MyTodoController.js.map