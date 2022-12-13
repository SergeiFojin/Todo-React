import {Schema, model} from "mongoose";

type TodoSchema = {
    value: String;
    isCompleted: Boolean;
}

const todoSchema = new Schema<TodoSchema>({
    value: String,
    isCompleted: Boolean
}, {versionKey: false});

const Todos = model<TodoSchema>('Todos', todoSchema);

export default Todos;
