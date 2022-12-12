import React from 'react';
import {useReducer, useState} from "react";
import './App.css';
import TodoInput from "./components/input/TodoInput";
import TodoList from "./components/todoList/TodoList";
import reducer from "./store/reducer";
import {Todo} from "./types/types";
import {TodoActionsEnum} from "./store/actions";

const App = () =>  {
  const initialState: Todo[] = [];
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState<string>('');

  const addTodo = (value: string) => {
    if (value !== '') {
      dispatch({
        type: TodoActionsEnum.ADD_TODO,
        payload: value
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
