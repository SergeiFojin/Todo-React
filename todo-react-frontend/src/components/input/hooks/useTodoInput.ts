import { useCallback, useState } from 'react';
import _debounce from 'lodash/debounce';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addTodoSaga } from '../../../store/sagas/actions';

export const useTodoInput = () => {
  const [value, setValue] = useState<string>('');
  const fetchStatus: string = useAppSelector((state) => state.todoReducer.requestStatus);
  const dispatch = useAppDispatch();

  const debounceFunction = (value: string) => {
    return value;
  };

  const debounceHandle = useCallback(_debounce((value) => debounceFunction(value), 500), []);

  const setValueHandler = (value: string) => {
    setValue(value);
    debounceHandle(value);
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

  const addTodoHandler = useCallback(_debounce((value) => addTodo(value), 500), []);

  return {
    value,
    setValueHandler,
    addTodoHandler,
    fetchStatus,
  };
};
