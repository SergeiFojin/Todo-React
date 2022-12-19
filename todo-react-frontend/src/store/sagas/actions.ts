import { AddTodoField, CompleteTodoField } from './types';

export enum TodoActionsEnumSaga {
  GET_TODOS_SAGA = 'GET_TODOS_SAGA',
  ADD_TODO_SAGA = 'ADD_TODO_SAGA',
  COMPLETE_TODO_SAGA = 'COMPLETE_TODO_SAGA',
  DELETE_TODO_SAGA = 'DELETE_TODO_SAGA',
  COMPLETE_ALL_TODO_SAGA = 'COMPLETE_ALL_TODO_SAGA',
  CLEAR_COMPLETED_SAGA = 'CLEAR_COMPLETED_SAGA',
}

type GetTodosActionSaga = {
  type: TodoActionsEnumSaga.GET_TODOS_SAGA;
}

type AddTodoActionSaga = {
  type: TodoActionsEnumSaga.ADD_TODO_SAGA;
  payload: AddTodoField;
}

type CompleteTodoActionSaga = {
  type: TodoActionsEnumSaga.COMPLETE_TODO_SAGA;
  payload: CompleteTodoField;
}

type DeleteTodoActionSaga = {
  type: TodoActionsEnumSaga.DELETE_TODO_SAGA;
  payload: string;
}

type CompleteAllTodoActionSaga = {
  type: TodoActionsEnumSaga.COMPLETE_ALL_TODO_SAGA;
  payload: string;
}

type ClearCompletedActionSaga = {
  type: TodoActionsEnumSaga.CLEAR_COMPLETED_SAGA;
  payload: string;
}

export type TodoActionSaga =
  GetTodosActionSaga |
  AddTodoActionSaga |
  CompleteTodoActionSaga |
  DeleteTodoActionSaga |
  CompleteAllTodoActionSaga |
  ClearCompletedActionSaga

export const getTodosSaga = (): TodoActionSaga => ({ type: TodoActionsEnumSaga.GET_TODOS_SAGA });

export const addTodoSaga = (todo: AddTodoField): TodoActionSaga => ({
  type: TodoActionsEnumSaga.ADD_TODO_SAGA,
  payload: todo,
});

export const completeTodoSaga = (todo: CompleteTodoField): TodoActionSaga => ({
  type: TodoActionsEnumSaga.COMPLETE_TODO_SAGA,
  payload: todo,
});

export const deleteTodoSaga = (_id: string): TodoActionSaga => ({
  type: TodoActionsEnumSaga.DELETE_TODO_SAGA,
  payload: _id,
});

export const completeAllTodoSaga = (completeCheck: string): TodoActionSaga => ({
  type: TodoActionsEnumSaga.COMPLETE_ALL_TODO_SAGA,
  payload: completeCheck,
});

export const clearCompletedSaga = (_id: string): TodoActionSaga => ({
  type: TodoActionsEnumSaga.CLEAR_COMPLETED_SAGA,
  payload: _id,
});
