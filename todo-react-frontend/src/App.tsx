import React, { useReducer } from 'react';
import './App.css';
import { Todo } from "./types/types";
import reducer from "./store/reducer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";


const App = () =>  {
  let initialState: Todo[] = [];
  const [todos, dispatch] = useReducer(reducer, initialState);


  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage todos={todos} dispatch={dispatch}/>}/>
          <Route path={'/todos/:_id/:value/:isCompleted'} element={<TodoPage dispatch={dispatch}/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
