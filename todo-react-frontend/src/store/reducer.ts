import {Todo} from "../types/types";
import {TodoAction, TodoActionsEnum} from "./actions";

const reducer = (todos: Todo[], action: TodoAction): Todo[] => {
    switch(action.type) {

        case TodoActionsEnum.ADD_TODO:
            const newTodo: Todo = {id: `${Date.now()}`, value: action.payload, isCompleted: false};
            return [...todos, newTodo]

        case TodoActionsEnum.COMPLETE_TODO:
            return todos.map(item => {
                if (item.id === action.payload) {
                    item.isCompleted = !item.isCompleted
                }

                return item
            })

        case TodoActionsEnum.DELETE_TODO:
            return todos.filter(item => item.id !== action.payload)

        case TodoActionsEnum.COMPLETE_ALL_TODO:
            const newTodos: Todo[] = [...todos]

            if (newTodos.filter(item => !item.isCompleted).length !== 0) {
                newTodos.forEach(item => item.isCompleted = true)
                return newTodos
            }

            newTodos.forEach(item => item.isCompleted = false)
            return newTodos

        case TodoActionsEnum.CLEAR_COMPLETED:
            return todos.filter(item => !item.isCompleted)

        default:
            return todos
    }
}

export default reducer;
