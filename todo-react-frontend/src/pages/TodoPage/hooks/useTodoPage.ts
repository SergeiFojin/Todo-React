import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { completeTodoSaga } from '../../../store/sagas/actions';
import { Todo } from '../../../types/types';

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

  const completeTodo = (_id: string, isCompleted: boolean) => {
    dispatch(completeTodoSaga({
      _id,
      isCompleted,
    }));
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
