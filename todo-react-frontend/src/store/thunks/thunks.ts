import { Dispatch } from '@reduxjs/toolkit';
import {
  addTaskRequest, completeTaskRequest, deleteTaskRequest, getTasksRequest,
} from '../../API/axios';
import { TodoActionsEnum } from '../actions';
import { ErrorLogsEnum } from '../../types/errorLogs';

export const getTodosThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await getTasksRequest();
      dispatch({
        type: TodoActionsEnum.GET_TODOS,
        payload: result,
      });
    } catch (e) {
      console.log(ErrorLogsEnum.GET_TODOS_ERROR, e);
    }
  };
};

export const addTodoThunk = (value: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await addTaskRequest(value, false);
      dispatch({
        type: TodoActionsEnum.ADD_TODO,
        payload: result,
      });
    } catch (e) {
      console.log(ErrorLogsEnum.ADD_TODO_ERROR, e);
    }
  };
};

export const completeTodoThunk = (todoId: string, todoIsCompleted: boolean) => {
  return async (dispatch: Dispatch) => {
    try {
      await completeTaskRequest(`${todoId}`, todoIsCompleted);
      dispatch({
        type: TodoActionsEnum.COMPLETE_TODO,
        payload: todoId,
      });
    } catch (e) {
      console.log(ErrorLogsEnum.COMPLETE_TODO_ERROR, e);
    }
  };
};

export const deleteTodoThunk = (todoId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await deleteTaskRequest(todoId);
      dispatch({
        type: TodoActionsEnum.DELETE_TODO,
        payload: todoId,
      });
    } catch (e) {
      console.log(ErrorLogsEnum.DELETE_TODO_ERROR, e);
    }
  };
};

export const completeAllTodosThunk = (completeCheck: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await completeTaskRequest(completeCheck, true);
      dispatch({
        type: TodoActionsEnum.COMPLETE_ALL_TODO,
      });
    } catch (e) {
      console.log(ErrorLogsEnum.COMPLETE_ALL_TODO_ERROR, e);
    }
  };
};

export const clearCompletedThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      await deleteTaskRequest('');
      dispatch({
        type: TodoActionsEnum.CLEAR_COMPLETED,
      });
    } catch (e) {
      console.log(ErrorLogsEnum.CLEAR_COMPLETED_ERROR, e);
    }
  };
};
