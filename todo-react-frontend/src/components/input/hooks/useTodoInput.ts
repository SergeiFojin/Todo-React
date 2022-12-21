import { useState } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { addTodoSaga } from '../../../store/sagas/actions';

export const useTodoInput = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();

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

  const debounce = (callFunction: (value: string) => void, timeout: number) => {
    let lastCall = Date.now();
    return function perform(value: string) {
      const lastCallTimer: ReturnType<typeof setTimeout> = setTimeout(() => callFunction(value), timeout);
      const previousCall = lastCall;
      lastCall = Date.now();
      if (previousCall && lastCall - previousCall <= timeout) {
        clearTimeout(lastCallTimer);
      }
    };
  };

  const debounceHandle = debounce(addTodo, 250);

  return {
    value,
    setValue,
    debounceHandle,
  };
};
