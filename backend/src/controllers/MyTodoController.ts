import TodoModel from '../models/MyTodoModel'
import Logger from '../utils/Logger'
import { Request, Response } from 'express'
import StatusCode from "../configurations/StatusCode";
import {Todo} from "../utils/interface/InterfaceTodos";


// Create Todos in the List
const createTodos = async (req: Request, res: Response) => {
    Logger.http(req.body)
const {text, day}: Todo = req.body
    const todos = new TodoModel({
        text,
        day,

    })
    Logger.debug(todos)

    try {
        const response = await todos.save()
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
        res.status(StatusCode.CREATED).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({message: error.message})
    }
}

// Find Todos List
const todoList  = async (req: Request, res: Response) => {
    try {
        const response = await TodoModel.find()
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({message: error.message})
    }
}

// Get Todos By the Id
const todoById  = async (req: Request, res: Response) => {
    try {
        const {todoId} = req.params
        Logger.http(`todoId: ${ todoId }`)
        const response = await TodoModel.findById(todoId)
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({
                message: `Error occurred while trying to accesses todo with ID: ${ req.params.todoId }`,
                error: error.message
            })
    }
}
//By ID
interface SearchForTodo {
    text: string
}
// Find Todos with Day
const findTodoByQuery  = async (req: Request, res: Response) => {
    try {
        const {text} = req.query
        Logger.http(`text: ${ text }`)
        const query: SearchForTodo = {text: String(text)}
        const response = await TodoModel.find(query)
        Logger.debug(response)
        response.length !== 0
            ? res.status(StatusCode.OK).send(response)
            : res.status(StatusCode.NOT_FOUND).send({
                message: `Couldn't find any todo from list: ${ text }`
            })

    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({
                message: `Error occurred while trying to accesses todo with ID: ${ req.params.todoId }`,
                error: error.message
            })
    }
}

// Update Todos in the List
const updateTodos = async (req: Request, res: Response) => {
    try {
        const {todoId} = req.params
        Logger.http(`todoId: ${ todoId }`)
        const {text, day} = req.body
        Logger.http(`req.body: ${ req.body }`)
        if (!req.body) {
            res.status(StatusCode.BAD_REQUEST)
                .send({message: `Cant update without ID`})
        }
        const response = await TodoModel.findByIdAndUpdate(todoId, {
            text,
            day
        }, {new: true})
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({
                message: `Error occurred while trying to update todo with ID: ${ req.params.todoId }`,
                error: error.message
            })
    }
}

// Delete Todos in the List
const deleteTodos = async (req: Request, res: Response) => {
    try {
        const {todoId} = req.params
        const response = await TodoModel.findByIdAndDelete(todoId)
        res.status(StatusCode.OK).send({
            message: `Successfully deleted todo from list: ${ response.text } and ID: ${ todoId }`
        })
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send({
                message: `Error occurred while trying to delete todo from list: ${ req.params.todoId }`,
                error: error.message
            })
    }
}




// Exports
export default {
    createTodos,
    todoList,
    todoById,
    findTodoByQuery,
    updateTodos,
    deleteTodos
}