import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { Todo } from '../../../types/types';
import { completeTodoThunk } from '../../../store/thunks';

type TodoPageParams = {
  _id: string;
  value: string;
  isCompleted: string
}

export const useTodoPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams<TodoPageParams>();
  const navigate = useNavigate();
  const initialState = { _id: params._id || '', value: params.value || '', isCompleted: params.isCompleted === 'true' };
  const [todo, setTodo] = useState<Todo>(initialState);

  const completeTodo = (todoId: string, todoIsCompleted: boolean) => {
    dispatch(completeTodoThunk(todoId, todoIsCompleted));
    setTodo({ ...todo, isCompleted: !todo.isCompleted });
  };

  const navigateToMain = () => {
    navigate('/');
  };

  return {
    todo,
    completeTodo,
    navigateToMain,
  };
};
