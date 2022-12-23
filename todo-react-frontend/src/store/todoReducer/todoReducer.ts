import { FetchStatusEnum, Todo } from '../../types/types';
import { TodoAction, TodoActionsEnum } from './todoActions';

type stateType = {
    todos: Todo[];
    requestStatus: string;
    errorMessage: string;
}

const initialState: stateType = {
  todos: [],
  requestStatus: FetchStatusEnum.SUCCESS,
  errorMessage: '',
};

const todoReducer = (state = initialState, action: TodoAction): stateType => {
  switch (action.type) {
    case TodoActionsEnum.LOADING_TODO:
      return { ...state, requestStatus: FetchStatusEnum.LOADING };

    case TodoActionsEnum.ADDING_TODO:
      return { ...state, requestStatus: FetchStatusEnum.ADD_LOADING };

    case TodoActionsEnum.ERROR_TODO:
      return { ...state, requestStatus: FetchStatusEnum.ERROR, errorMessage: action.payload };

    case TodoActionsEnum.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload], requestStatus: FetchStatusEnum.SUCCESS };

    case TodoActionsEnum.COMPLETE_TODO:
      const completeTodos: Todo[] = [...state.todos];
      return {
        ...state,
        todos:
          completeTodos.map((item) => {
            let isCompletedValue: boolean = item.isCompleted;
            if (item._id === action.payload) {
              isCompletedValue = !item.isCompleted;
            }
            return { ...item, isCompleted: isCompletedValue };
          }),
        requestStatus: FetchStatusEnum.SUCCESS,
      };

    case TodoActionsEnum.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item._id !== action.payload),
        requestStatus: FetchStatusEnum.SUCCESS,
      };

    case TodoActionsEnum.COMPLETE_ALL_TODO:
      const completeAllTodos: Todo[] = [...state.todos];
      return {
        ...state,
        todos: completeAllTodos.map((item) => ({
          ...item,
          isCompleted: completeAllTodos.filter((item) => !item.isCompleted).length !== 0,
        })),
        requestStatus: FetchStatusEnum.SUCCESS,
      };

    case TodoActionsEnum.CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((item) => !item.isCompleted),
        requestStatus: FetchStatusEnum.SUCCESS,
      };

    case TodoActionsEnum.GET_TODOS:
      return { ...state, todos: action.payload, requestStatus: FetchStatusEnum.SUCCESS };

    default:
      return state;
  }
};

export default todoReducer;
