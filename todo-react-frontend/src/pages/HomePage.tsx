import React, {useEffect} from 'react';
import TodoInput from "../components/input/TodoInput";
import TodoList from "../components/TodoList/TodoList";
import {useAppDispatch} from "../store/hooks";
import {getTodos} from "../store/thunks";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">todos</header>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default HomePage;
