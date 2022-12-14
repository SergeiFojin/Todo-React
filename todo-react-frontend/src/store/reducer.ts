import {Todo} from "../types/types";
import {TodoAction, TodoActionsEnum} from "./actions";

type stateType = {
    todos: Todo[];
}

const initialState: stateType = {
    todos: [],
};

const reducer = (state = initialState, action: TodoAction): stateType => {

    switch(action.type) {

        case TodoActionsEnum.ADD_TODO:
            return {todos: [...state.todos, action.payload]}

        case TodoActionsEnum.COMPLETE_TODO:
            const completeTodos: Todo[] = [...state.todos]
            return {todos:
                  completeTodos.map(item => {
                      let isCompletedValue: boolean = item.isCompleted;
                      if (item._id === action.payload) {
                        isCompletedValue = !item.isCompleted;
                      }
                      return {...item, isCompleted: isCompletedValue}
                  })}

        case TodoActionsEnum.DELETE_TODO:
            return {todos: state.todos.filter(item => item._id !== action.payload)}

        case TodoActionsEnum.COMPLETE_ALL_TODO:
            const completeAllTodos: Todo[] = [...state.todos]
            return {todos: completeAllTodos.map(item => {
                return {...item, isCompleted: completeAllTodos.filter(item => !item.isCompleted).length !== 0}
                })
            }

        case TodoActionsEnum.CLEAR_COMPLETED:
            return {todos: state.todos.filter(item => !item.isCompleted)}

        case TodoActionsEnum.GET_TODOS:
            return {todos: action.payload}

        default:
            return state
    }
}

export default reducer;
