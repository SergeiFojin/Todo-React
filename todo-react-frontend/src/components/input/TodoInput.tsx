import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import * as S from './TodoInputStyles';
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
    <S.InputWrap>
      <S.InputBody
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
    </S.InputWrap>
  );
};

export default TodoInput;
