export enum TodoActionsEnum {
  ADD_TODO = 'ADD_TODO',
  COMPLETE_TODO = 'COMPLETE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  COMPLETE_ALL_TODO = 'COMPLETE_ALL_TODO',
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
}

type AddTodoAction = {
  type: TodoActionsEnum.ADD_TODO;
  payload: string;
}

type CompleteTodoAction = {
  type: TodoActionsEnum.COMPLETE_TODO;
  payload: string;
}

type DeleteTodoAction = {
  type: TodoActionsEnum.DELETE_TODO;
  payload: string;
}

type CompleteAllTodoAction = {
  type: TodoActionsEnum.COMPLETE_ALL_TODO;
}

type ClearCompletedAction = {
  type: TodoActionsEnum.CLEAR_COMPLETED;
}

export type TodoAction = AddTodoAction | CompleteTodoAction | DeleteTodoAction | CompleteAllTodoAction | ClearCompletedAction
