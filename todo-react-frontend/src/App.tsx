import React, {useEffect} from 'react';
import {useReducer, useState} from "react";
import './App.css';
import TodoInput from "./components/input/TodoInput";
import TodoList from "./components/todoList/TodoList";
import reducer from "./store/reducer";
import {Todo} from "./types/types";
import {TodoActionsEnum} from "./store/actions";
import {addTaskRequest, getTasksRequest} from "./API/axios";

const App = () =>  {
  let initialState: Todo[] = [];

  useEffect(() => {
    getTasksRequest()
      .then(data => {
        dispatch({
          type: TodoActionsEnum.GET_TODOS,
          payload: data
        })
      })
  }, [])

  const [todos, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState<string>('');

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

export default App;
