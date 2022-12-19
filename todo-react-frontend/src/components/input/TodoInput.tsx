import React, { useState } from 'react';
import './TodoInput.css';
import { useAppDispatch } from '../../store/hooks';
import { addTodoSaga } from '../../store/sagas/actions';

const TodoInput = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const addTodo = (value: string) => {
    dispatch(addTodoSaga({
      value,
      isCompleted: false,
    }));
    setValue('');
  };

  return (
    <div className="input-wrapper">
      <input
        className="input-body"
        type="text"
        value={value}
        placeholder="What needs to be done?"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(value);
          }
        }}
      />
    </div>
  );
};

export default TodoInput;
