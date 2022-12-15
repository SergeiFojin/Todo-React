import {getTasksRequest} from "../API/axios";
import {TodoActionsEnum} from "./actions";
import {Dispatch} from "@reduxjs/toolkit";

export const getTodos = () => {
  return(dispatch: Dispatch) => {
    getTasksRequest()
      .then(data => {
        dispatch({
          type: TodoActionsEnum.GET_TODOS,
          payload: data
        })
      })
  }
}
