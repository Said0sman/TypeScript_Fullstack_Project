"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
require("mocha");
const StatusCode_1 = __importDefault(require("./configurations/StatusCode"));
const Server_1 = __importDefault(require("./Server"));
const chai_http_1 = __importDefault(require("chai-http"));
chai_1.default.use(chai_http_1.default); // Test Api med Chai
const expect = chai_1.default.expect;
const randomString = Math.random().toString(36).substring(7);
let myTodoId = '617943c7542fec4485f31998';
const myTodo = {
    username: randomString,
    password: randomString,
};
const updatedTodos = {
    username: randomString + randomString,
    password: randomString + randomString,
};
const todoRouter = '/Todos';
const testIfRouteWorks = () => {
    describe('Test a route that does not exist', () => {
        it('Expecting 404 not found', () => {
            return chai_1.default.request(Server_1.default).get(`/${randomString}`)
                .then((response) => {
                expect(response.status).to.equal(StatusCode_1.default.NOT_FOUND);
            });
        });
    });
};
const testCreateTodo = () => {
    describe('Test if POST is creating and working correctly', () => {
        it('Expecting to create a todo', (done) => {
            chai_1.default.request(Server_1.default)
                .post(todoRouter)
                .send(myTodo)
                .end((error, response) => {
                expect(response.status).to.equal(StatusCode_1.default.OK); // Double check later here
                expect(response.body).be.a('object');
                myTodoId = response.body._id;
                expect(response.body).have.property('username').eq(myTodo.username);
                expect(response.body).have.property('password').eq(myTodo.password);
                done();
            });
        });
    });
};
const testTodoList = () => {
    describe('Test if GET is accessing to todo list', () => {
        it('Expecting to return all in the todoList', () => {
            return chai_1.default.request(Server_1.default).get(`/${randomString}`)
                .then((response) => {
                expect(response.status).to.equal(StatusCode_1.default.NOT_FOUND);
            });
        });
    });
};
const testUpdateTodos = () => {
    describe('Test if PUT is updating and working correctly', () => {
        it('Expecting to update a todo with a valid ID', (done) => {
            chai_1.default.request(Server_1.default)
                .post(todoRouter)
                .send(myTodo)
                .end((error, response) => {
                expect(response.status).to.equal(StatusCode_1.default.OK);
                expect(response.body).be.a('object');
                myTodoId = response.body._id;
                expect(response.body).have.property('username').eq(myTodo.username);
                expect(response.body).have.property('password').eq(myTodo.password);
                done();
            });
        });
    });
};
const testDeleteTodos = () => {
    describe('Test if Delete is working correctly', () => {
        it('Expecting to delete with Id in the todo list', (done) => {
            chai_1.default.request(Server_1.default)
                .delete(`${todoRouter}/${myTodoId}`)
                .end((error, response) => {
                expect(response.status).to.equal(StatusCode_1.default.OK); // Double check later here
                done();
            });
        });
    });
};
describe('TESTING THE USER_API ROTE', () => {
    testIfRouteWorks();
    testCreateTodo();
    testTodoList();
    testUpdateTodos();
    testDeleteTodos();
});
//# sourceMappingURL=RoutesTodo.spec.js.map