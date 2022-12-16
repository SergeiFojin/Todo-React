import React from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { completeTodoThunk, deleteTodoThunk } from '../../../store/thunks';

export const useTodoListItem = () => {
  const dispatch = useAppDispatch();

  const completeTodo = (
    todoId: string,
    todoIsCompleted: boolean,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    dispatch(completeTodoThunk(todoId, todoIsCompleted));
  };

  const deleteTodo = (
    todoId: string,
    e: React.MouseEvent<HTMLButtonElement,
      MouseEvent>,
  ) => {
    e.stopPropagation();
    dispatch(deleteTodoThunk(todoId));
  };

  return {
    completeTodo,
    deleteTodo,
  };
};
