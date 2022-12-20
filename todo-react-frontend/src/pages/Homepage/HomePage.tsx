import React, { useEffect } from 'react';
import * as S from './Homepage';
import { useAppDispatch } from '../../store/hooks';
import { getTodosSaga } from '../../store/sagas/actions';
import TodoInput from '../../components/input/TodoInput';
import TodoList from '../../components/TodoList/TodoList';

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodosSaga());
  }, [dispatch]);

  return (
    <S.Body>
      <S.Header>todos</S.Header>
      <TodoInput />
      <TodoList />
    </S.Body>
  );
};

export default HomePage;
