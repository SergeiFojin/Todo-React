import {addTaskRequest, completeTaskRequest, deleteTaskRequest, getTasksRequest} from "../API/axios";
import {TodoActionsEnum} from "./actions";
import {Dispatch} from "@reduxjs/toolkit";
import {ErrorLogsEnum} from "../types/errorLogs";

export const getTodos = () => {
  return async (dispatch: Dispatch) => {
    try{
      const result = await getTasksRequest()
      dispatch({
        type: TodoActionsEnum.GET_TODOS,
        payload: result
      })
    } catch {
      console.log(ErrorLogsEnum.GET_TODOS_ERROR)
    }
  }
}

export const addTodoThunk = (value: string) => {
  return async (dispatch: Dispatch) => {
    try{
      const result = await addTaskRequest(value, false)
      dispatch({
        type: TodoActionsEnum.ADD_TODO,
        payload: result
      })
    } catch {
      console.log(ErrorLogsEnum.ADD_TODO_ERROR)
    }
  }
}

export const completeTodoThunk = (todoId: string, todoIsCompleted: boolean) => {
  return async (dispatch: Dispatch) => {
    try {
      await completeTaskRequest(`${todoId}`, todoIsCompleted)
      dispatch({
        type: TodoActionsEnum.COMPLETE_TODO,
        payload: todoId
      })
    } catch {
      console.log(ErrorLogsEnum.COMPLETE_TODO_ERROR)
    }
  }
}

export const deleteTodoThunk = (todoId: string) => {
  return async (dispatch: Dispatch) => {
    try{
      await deleteTaskRequest(todoId)
      dispatch({
        type: TodoActionsEnum.DELETE_TODO,
        payload: todoId
      })
    } catch {
      console.log(ErrorLogsEnum.DELETE_TODO_ERROR)
    }
  }
}

export const completeAllTodosThunk = (completeCheck: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await completeTaskRequest(completeCheck, true)
      dispatch({
        type: TodoActionsEnum.COMPLETE_ALL_TODO
      })
    } catch {
      console.log(ErrorLogsEnum.COMPLETE_ALL_TODO_ERROR)
    }
  }
}

export const clearCompletedThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      await deleteTaskRequest('')
      dispatch({
        type: TodoActionsEnum.CLEAR_COMPLETED
      })
    } catch {
      console.log(ErrorLogsEnum.CLEAR_COMPLETED_ERROR)
    }
  }
}
