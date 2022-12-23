import { Todo } from '../../types/types';
import { TodoActionSaga } from '../sagas/actions';

export enum TodoActionsEnum {
  LOADING_TODO = 'LOADING_TODO',
  ADDING_TODO = 'ADDING_TODO',
  ERROR_TODO = 'ERROR_TODO',
  ADD_TODO = 'ADD_TODO',
  COMPLETE_TODO = 'COMPLETE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  COMPLETE_ALL_TODO = 'COMPLETE_ALL_TODO',
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
  GET_TODOS = 'GET_TODOS',
}

type LoadingTodoAction = {
  type: TodoActionsEnum.LOADING_TODO;
}

type AddingTodoAction = {
  type: TodoActionsEnum.ADDING_TODO;
}

type ErrorTodoAction = {
  type: TodoActionsEnum.ERROR_TODO;
  payload: string;
}

type AddTodoAction = {
  type: TodoActionsEnum.ADD_TODO;
  payload: Todo;
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

type GetTodosAction = {
  type: TodoActionsEnum.GET_TODOS;
  payload: Todo[];
}

export type TodoAction =
  LoadingTodoAction |
  AddingTodoAction |
  ErrorTodoAction |
  AddTodoAction |
  CompleteTodoAction |
  DeleteTodoAction |
  CompleteAllTodoAction |
  ClearCompletedAction |
  GetTodosAction |
  TodoActionSaga
