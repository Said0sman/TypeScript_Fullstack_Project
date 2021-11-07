import {Schema, model } from "mongoose";
import {Todo} from '../utils/interface/UserTodos'

const dbCollection = process.env.MONGODB_COLLECTION


const schema = new Schema<Todo>({
    username:  {type: String, required:true},
    password:  {type: String, required:true},

},
    {timestamps: true})

const TodoModel =  model<Todo>(dbCollection, schema)

export default TodoModel;