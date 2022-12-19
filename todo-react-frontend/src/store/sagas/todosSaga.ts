import { put, takeEvery, call } from 'redux-saga/effects';
import { addTaskRequest, completeTaskRequest, deleteTaskRequest, getTasksRequest } from '../../API/axios';
import { TodoActionsEnum } from '../actions';
import { TodoActionsEnumSaga } from './actions';
import { Todo } from '../../types/types';
import {
  AddTodoSaga,
  ClearCompletedSaga,
  CompleteAllTodoSaga,
  CompleteTodoSaga,
  DeleteTodoSaga,
} from './types';

function* getTodosWorker() {
  const result: Todo[] = yield call(getTasksRequest);
  yield put({
    type: TodoActionsEnum.GET_TODOS,
    payload: result,
  });
}

export function* addTodoWorker({ payload }: AddTodoSaga) {
  const result: Todo = yield addTaskRequest(payload.value, payload.isCompleted);
  yield put({
    type: TodoActionsEnum.ADD_TODO,
    payload: result,
  });
}

export function* completeTodoWorker({ payload }: CompleteTodoSaga) {
  yield completeTaskRequest(payload._id, payload.isCompleted);
  yield put({
    type: TodoActionsEnum.COMPLETE_TODO,
    payload: payload._id,
  });
}

export function* deleteTodoWorker({ payload }: DeleteTodoSaga) {
  yield deleteTaskRequest(payload);
  yield put({
    type: TodoActionsEnum.DELETE_TODO,
    payload,
  });
}

export function* completeAllTodoWorker({ payload }: CompleteAllTodoSaga) {
  yield completeTaskRequest(payload, true);
  yield put({
    type: TodoActionsEnum.COMPLETE_ALL_TODO,
  });
}

export function* clearCompletedWorker({ payload }: ClearCompletedSaga) {
  yield deleteTaskRequest(payload);
  yield put({
    type: TodoActionsEnum.CLEAR_COMPLETED,
  });
}

export function* todosSaga() {
  yield takeEvery(TodoActionsEnumSaga.GET_TODOS_SAGA, getTodosWorker);
  yield takeEvery(TodoActionsEnumSaga.ADD_TODO_SAGA, addTodoWorker);
  yield takeEvery(TodoActionsEnumSaga.COMPLETE_TODO_SAGA, completeTodoWorker);
  yield takeEvery(TodoActionsEnumSaga.DELETE_TODO_SAGA, deleteTodoWorker);
  yield takeEvery(TodoActionsEnumSaga.COMPLETE_ALL_TODO_SAGA, completeAllTodoWorker);
  yield takeEvery(TodoActionsEnumSaga.CLEAR_COMPLETED_SAGA, clearCompletedWorker);
}
