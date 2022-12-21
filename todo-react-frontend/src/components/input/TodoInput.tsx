import React from 'react';
import * as S from './TodoInputStyles';
import TodoListCompleteAll from '../TodoListCompleteAll/TodoListCompleteAll';
import { useTodoInput } from './hooks/useTodoInput';

const TodoInput = () => {
  const { value, setValue, debounceHandle } = useTodoInput();

  return (
    <S.InputWrap>
      <TodoListCompleteAll />
      <S.InputBody
        type="text"
        value={value}
        placeholder="What needs to be done?"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            debounceHandle(value);
          }
        }}
      />
    </S.InputWrap>
  );
};

export default TodoInput;
