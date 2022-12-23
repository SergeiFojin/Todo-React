import { put, takeEvery, call } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import {
  addTaskRequest,
  completeTaskRequest,
  deleteTaskRequest,
  getTasksRequest,
} from '../../API/axios';
import { TodoActionsEnum } from '../todoReducer/todoActions';
import { TodoActionsEnumSaga } from './actions';
import { Todo } from '../../types/types';
import {
  AddTodoSaga,
  ClearCompletedSaga,
  CompleteAllTodoSaga,
  CompleteTodoSaga,
  DeleteTodoSaga,
} from './types';
import { ErrorLogsEnum } from '../../types/errorLogs';

function* getTodosWorker() {
  try {
    yield put({
      type: TodoActionsEnum.LOADING_TODO,
    });
    const result: Todo[] = yield call(getTasksRequest);
    yield put({
      type: TodoActionsEnum.GET_TODOS,
      payload: result,
    });
  } catch (e) {
    const err = e as AxiosError;
    yield put({
      type: TodoActionsEnum.ERROR_TODO,
      payload: `${ErrorLogsEnum.GET_TODOS_ERROR} ${err.message}`,
    });
  }
}

export function* addTodoWorker({ payload }: AddTodoSaga) {
  try {
    yield put({
      type: TodoActionsEnum.ADDING_TODO,
    });
    const result: Todo[] = yield addTaskRequest(payload.value, payload.isCompleted);
    yield put({
      type: TodoActionsEnum.ADD_TODO,
      payload: result,
    });
  } catch (e) {
    const err = e as AxiosError;
    yield put({
      type: TodoActionsEnum.ERROR_TODO,
      payload: `${ErrorLogsEnum.ADD_TODO_ERROR} ${err.message}`,
    });
  }
}

export function* completeTodoWorker({ payload }: CompleteTodoSaga) {
  try {
    yield completeTaskRequest(payload._id, payload.isCompleted);
    yield put({
      type: TodoActionsEnum.COMPLETE_TODO,
      payload: payload._id,
    });
  } catch (e) {
    const err = e as AxiosError;
    yield put({
      type: TodoActionsEnum.ERROR_TODO,
      payload: `${ErrorLogsEnum.COMPLETE_TODO_ERROR} ${err.message}`,
    });
  }
}

export function* deleteTodoWorker({ payload }: DeleteTodoSaga) {
  try {
    yield deleteTaskRequest(payload);
    yield put({
      type: TodoActionsEnum.DELETE_TODO,
      payload,
    });
  } catch (e) {
    const err = e as AxiosError;
    yield put({
      type: TodoActionsEnum.ERROR_TODO,
      payload: `${ErrorLogsEnum.DELETE_TODO_ERROR} ${err.message}`,
    });
  }
}

export function* completeAllTodoWorker({ payload }: CompleteAllTodoSaga) {
  try {
    yield completeTaskRequest(payload, true);
    yield put({
      type: TodoActionsEnum.COMPLETE_ALL_TODO,
    });
  } catch (e) {
    const err = e as AxiosError;
    yield put({
      type: TodoActionsEnum.ERROR_TODO,
      payload: `${ErrorLogsEnum.COMPLETE_ALL_TODO_ERROR} ${err.message}`,
    });
  }
}

export function* clearCompletedWorker({ payload }: ClearCompletedSaga) {
  try {
    yield deleteTaskRequest(payload);
    yield put({
      type: TodoActionsEnum.CLEAR_COMPLETED,
    });
  } catch (e) {
    const err = e as AxiosError;
    yield put({
      type: TodoActionsEnum.ERROR_TODO,
      payload: `${ErrorLogsEnum.CLEAR_COMPLETED_ERROR} ${err.message}`,
    });
  }
}

export function* todosSaga() {
  yield takeEvery(TodoActionsEnumSaga.GET_TODOS_SAGA, getTodosWorker);
  yield takeEvery(TodoActionsEnumSaga.ADD_TODO_SAGA, addTodoWorker);
  yield takeEvery(TodoActionsEnumSaga.COMPLETE_TODO_SAGA, completeTodoWorker);
  yield takeEvery(TodoActionsEnumSaga.DELETE_TODO_SAGA, deleteTodoWorker);
  yield takeEvery(TodoActionsEnumSaga.COMPLETE_ALL_TODO_SAGA, completeAllTodoWorker);
  yield takeEvery(TodoActionsEnumSaga.CLEAR_COMPLETED_SAGA, clearCompletedWorker);
}
