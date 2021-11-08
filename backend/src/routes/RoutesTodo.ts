import { Express } from 'express'
import MyTodoController from "../controllers/MyTodoController";

const todosUrl: string = '/Todos'
const todoByIdUrl : string = `${todosUrl}/:id`
const findByDay = '/findByDay'

const routes = (app: Express) => {
    app.post(todosUrl, MyTodoController.createTodos)
    app.get(todosUrl, MyTodoController.todoList)
    app.get(todoByIdUrl, MyTodoController.todoById)
    app.get(findByDay, MyTodoController.findTodoByQuery)
    app.put(todoByIdUrl, MyTodoController.updateTodos)
    app.delete(todoByIdUrl, MyTodoController.deleteTodos)
}
export default {
    routes
}