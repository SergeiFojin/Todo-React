import { useState } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { addTodoSaga } from '../../../store/sagas/actions';
import { useDebounce } from './useDebounce';

export const useTodoInput = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const debouncedValue = useDebounce(value, 500);

  const setValueHandler = (value: string) => {
    setValue(value);
  };

  const addTodo = (value: string) => {
    if (value === '') {
      return;
    }

    dispatch(addTodoSaga({
      value,
      isCompleted: false,
    }));

    setValue('');
  };

  return {
    value,
    debouncedValue,
    addTodo,
    setValueHandler,
  };
};
