import {Schema, model } from "mongoose";
import {Todo} from '../utils/interface/InterfaceTodos'


const dbCollection = process.env.MONGODB_COLLECTION


const schema = new Schema<Todo>({
    text:  {type: String, required:true},
    day:  {type: String, required:true},

},
    {timestamps: true})

const TodoModel =  model<Todo>(dbCollection, schema)

export default TodoModel;