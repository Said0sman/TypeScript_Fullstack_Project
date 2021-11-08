import chai from "chai"
import 'mocha'
import StatusCode from "./configurations/StatusCode";
import app from "./Server"
import chaiHttp from  'chai-http'
import {Todo} from "./utils/interface/UserTodos";



chai.use(chaiHttp) // Test Api med Chai
const expect = chai.expect

const randomString = Math.random().toString(36).substring(7)
let myTodoId: string = '617943c7542fec4485f31998'
const myTodo: Todo = {
    username: randomString,
    password: randomString,
}
const updatedTodos: Todo = {
    username: randomString + randomString,
    password: randomString + randomString,
}

const todoRouter = '/Todos'

const testIfRouteWorks = () => {
    describe('Test a route that does not exist', () => {
        it('Expecting 404 not found', () => {
            return chai.request(app).get(`/${ randomString }`)
                .then((response) => {
                    expect(response.status).to.equal(StatusCode.NOT_FOUND)
                })
        })
    })
}

const testCreateTodo = () => {
    describe('Test if POST is creating and working correctly', () => {
        it('Expecting to create a todo', (done) => {
            chai.request(app)
                .post(todoRouter)
                .send(myTodo)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK) // Double check later here
                    expect(response.body).be.a('object')
                    myTodoId = response.body._id
                    expect(response.body).have.property('username').eq(myTodo.username)
                    expect(response.body).have.property('password').eq(myTodo.password)
                done()
                })
        })
    })
}

const testTodoList = () => {
    describe('Test if GET is accessing to todo list', () => {
       it('Expecting to return all in the todoList', () => {
           return chai.request(app).get(`/${ randomString }`)
               .then((response) => {
                   expect(response.status).to.equal(StatusCode.NOT_FOUND)
               })
       })
    })
}

const testUpdateTodos = () => {
    describe('Test if PUT is updating and working correctly', () => {
        it('Expecting to update a todo with a valid ID', (done) => {
            chai.request(app)
                .post(todoRouter)
                .send(myTodo)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)
                    expect(response.body).be.a('object')
                    myTodoId = response.body._id
                    expect(response.body).have.property('username').eq(myTodo.username)
                    expect(response.body).have.property('password').eq(myTodo.password)
                    done()
                })
        })
    })
}
const testDeleteTodos = () => {
    describe('Test if Delete is working correctly', () => {
        it('Expecting to delete with Id in the todo list', (done) => {
            chai.request(app)
                .delete(`${todoRouter}/${myTodoId}`)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK) // Double check later here
                    done()
                })
        })
    })
}







describe('TESTING THE USER_API ROTE', () => {
    testIfRouteWorks()
testCreateTodo()
    testTodoList()
    testUpdateTodos()
   testDeleteTodos()
})
