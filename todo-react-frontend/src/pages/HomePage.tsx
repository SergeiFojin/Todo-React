import React, {useEffect, useState} from 'react';
import TodoInput from "../components/input/TodoInput";
import TodoList from "../components/TodoList/TodoList";
import { addTaskRequest, getTasksRequest } from "../API/axios";
import {TodoActionsEnum} from "../store/actions";
import {useAppDispatch} from "../store/hooks";
import {Dispatch} from "@reduxjs/toolkit";


const HomePage = () => {
  const [value, setValue] = useState<string>('');
  const dispatch: Dispatch = useAppDispatch();

  useEffect(() => {
    getTasksRequest()
      .then(data => {
        dispatch({
          type: TodoActionsEnum.GET_TODOS,
          payload: data
        })
      })
  }, [])

  const addTodo = async (value: string) => {
    if (value !== '') {
      await addTaskRequest( value, false)
        .then(data => {
          dispatch({
            type: TodoActionsEnum.ADD_TODO,
            payload: data
          })
        })

      setValue('');
    }
  }

  return (
    <div className="App">
      <header className="App-header">todos</header>
      <TodoInput value={value} setValue={setValue} addTodo={addTodo}/>
      <TodoList/>
    </div>
  );
}

export default HomePage;
