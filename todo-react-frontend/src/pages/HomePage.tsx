import React, { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { getTodosSaga } from '../store/sagas/actions';
import TodoInput from '../components/input/TodoInput';
import TodoList from '../components/TodoList/TodoList';

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodosSaga());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">todos</header>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default HomePage;
