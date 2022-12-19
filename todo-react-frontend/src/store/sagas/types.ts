import { Todo } from '../../types/types';

export type AddTodoField = Omit<Todo, '_id'>;

export type CompleteTodoField = Omit<Todo, 'value'>;

export type AddTodoSaga = {
  type: string;
  payload: AddTodoField;
}

export type CompleteTodoSaga = {
  type: string;
  payload: CompleteTodoField;
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
