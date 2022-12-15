import React, {Dispatch, useEffect, useState} from 'react';
import TodoInput from "../components/input/TodoInput";
import TodoList from "../components/TodoList/TodoList";
import {Todo} from "../types/types";
import { addTaskRequest, getTasksRequest } from "../API/axios";
import {TodoAction, TodoActionsEnum} from "../store/actions";

type HomePageProps = {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
}

const HomePage = ({todos, dispatch}: HomePageProps) => {
  const [value, setValue] = useState<string>('');

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
      <TodoList todos={todos} dispatch={dispatch}/>
    </div>
  );
}

export default HomePage;