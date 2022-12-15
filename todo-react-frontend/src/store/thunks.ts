import {addTaskRequest, completeTaskRequest, deleteTaskRequest, getTasksRequest} from "../API/axios";
import {TodoActionsEnum} from "./actions";
import {Dispatch} from "@reduxjs/toolkit";

export const getTodos = () => {
  return async (dispatch: Dispatch) => {
  const result = await getTasksRequest()
    dispatch({
      type: TodoActionsEnum.GET_TODOS,
      payload: result
    })
  }
}

export const addTodoThunk = (value: string) => {
  return async (dispatch: Dispatch) => {
    const result = await addTaskRequest(value, false)
    dispatch({
      type: TodoActionsEnum.ADD_TODO,
      payload: result
    })
  }
}

export const completeTodoThunk = (todoId: string, todoIsCompleted: boolean) => {
  return async (dispatch: Dispatch) => {
    await completeTaskRequest(`${todoId}`, todoIsCompleted)
    dispatch({
      type: TodoActionsEnum.COMPLETE_TODO,
      payload: todoId
    })
  }
}

export const deleteTodoThunk = (todoId: string) => {
  return async (dispatch: Dispatch) => {
    await deleteTaskRequest(todoId)
    dispatch({
      type: TodoActionsEnum.DELETE_TODO,
      payload: todoId
    })
  }
}

export const completeAllTodosThunk = (completeCheck: string) => {
  return async (dispatch: Dispatch) => {
    await completeTaskRequest(completeCheck, true)
    dispatch({
      type: TodoActionsEnum.COMPLETE_ALL_TODO
    })
  }
}

export const clearCompletedThunk = () => {
  return async (dispatch: Dispatch) => {
    await deleteTaskRequest('')
    dispatch({
      type: TodoActionsEnum.CLEAR_COMPLETED
    })
  }
}
