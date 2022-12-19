import { Todo } from '../../types/types';

export type AddTodoFields = Omit<Todo, '_id'>;

export type CompleteTodoFields = Omit<Todo, 'value'>;

export type AddTodoSaga = {
  type: string;
  payload: AddTodoFields;
}

export type CompleteTodoSaga = {
  type: string;
  payload: CompleteTodoFields;
}

export type DeleteTodoSaga = {
  type: string;
  payload: string;
}

export type CompleteAllTodoSaga = {
  type: string;
  payload: string;
}

export type ClearCompletedSaga = {
  type: string;
  payload: string;
}
