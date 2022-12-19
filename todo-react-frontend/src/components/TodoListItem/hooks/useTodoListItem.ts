import React from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { completeTodoSaga, deleteTodoSaga } from '../../../store/sagas/actions';

export const useTodoListItem = () => {
  const dispatch = useAppDispatch();

  const completeTodo = (
    _id: string,
    isCompleted: boolean,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    dispatch(completeTodoSaga({
      _id,
      isCompleted,
    }));
  };

  const deleteTodo = (
    _id: string,
    e: React.MouseEvent<HTMLButtonElement,
      MouseEvent>,
  ) => {
    e.stopPropagation();
    dispatch(deleteTodoSaga(_id));
  };

  return {
    completeTodo,
    deleteTodo,
  };
};
