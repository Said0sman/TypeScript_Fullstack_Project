import {Schema, model } from "mongoose";


const dbCollection = process.env.MONGODB_COLLECTION

interface Todo {
    username: string;
    password: string;
}

const schema = new Schema<Todo>({
    username:  {type: String, required:true},
    password:  {type: String, required:true},

},
    {timestamps: true})

const TodoModel =  model<Todo>(dbCollection, schema)

export default TodoModel;