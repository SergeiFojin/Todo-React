import {Todo} from "../types/types";
import {TodoAction, TodoActionsEnum} from "./actions";

const defaultTodos: Todo[] = [];

const reducer = (todos = defaultTodos, action: TodoAction): Todo[] => {
    switch(action.type) {

        case TodoActionsEnum.ADD_TODO:
            return [...todos, action.payload]

        case TodoActionsEnum.COMPLETE_TODO:
            const completeTodos = [...todos]
            return completeTodos.map(item => {
                if (item._id === action.payload) {
                    item.isCompleted = !item.isCompleted
                }

                return item
            })

        case TodoActionsEnum.DELETE_TODO:
            return todos.filter(item => item._id !== action.payload)

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

        case TodoActionsEnum.GET_TODOS:
            return action.payload

        default:
            return todos
    }
}

export default reducer;
