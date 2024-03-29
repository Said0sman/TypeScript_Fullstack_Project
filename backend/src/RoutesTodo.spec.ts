import chai from "chai"
import 'mocha'
import StatusCode from "./configurations/StatusCode";
import app from "./Server"
import chaiHttp from  'chai-http'
import {Todo} from "./utils/interface/InterfaceTodos";



chai.use(chaiHttp) // Test Api med Chai
const expect = chai.expect

const randomString = Math.random().toString(36).substring(7)
let myTodoId: string = '619181e3b276a0e252d5b5b0'
const myTodo: Todo = {
    text: randomString,
    day: randomString,
}
const updatedTodos: Todo = {
    text: randomString + randomString,
    day: randomString + randomString,
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
                    expect(response.status).to.equal(StatusCode.CREATED) // Double check later here
                    expect(response.body).be.a('object')
                    myTodoId = response.body._id
                    expect(response.body).have.property('text').eq(myTodo.text)
                    expect(response.body).have.property('day').eq(myTodo.day)
                done()
                })
        })
    })
}

const testTodoList = () => {
    describe('Test if GET is accessing to todo list', () => {
       it('Expecting to return all in the todoList', (done) => {
           chai.request(app)
               .get(todoRouter)
               .end((error, response) => {
                   expect(response.status).to.equal(StatusCode.OK)
                   expect(response.body).be.a('array')
                   expect(response.body.length).be.eq(response.body.length)
                   done()
               })
       })
    })
}


const testUpdateTodos = () => {
    describe('Test if PUT is updating and working correctly', () => {
        it('Expecting to update a todo with a valid ID', (done) => {
            chai.request(app)
                .put(`${todoRouter}/${ myTodoId }`)
                .send(updatedTodos)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)
                    expect(response.body).be.a('object')
                    expect(response.body).have.property('_id').eq(myTodoId)
                    expect(response.body).have.property('text').eq(updatedTodos.text)
                    expect(response.body).have.property('day').eq(updatedTodos.day)
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
