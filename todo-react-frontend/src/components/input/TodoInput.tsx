import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './TodoInputStyles';
import TodoListCompleteAll from '../TodoListCompleteAll/TodoListCompleteAll';
import { useTodoInput } from './hooks/useTodoInput';

const TodoInput = () => {
  const { value, debouncedValue, setValueHandler, addTodo } = useTodoInput();
  const { t } = useTranslation();

  return (
    <S.InputWrap>
      <TodoListCompleteAll />
      <S.InputBody
        type="text"
        value={value}
        placeholder={t('placeholder') ?? ''}
        onChange={(e) => setValueHandler(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(debouncedValue);
          }
        }}
      />
    </S.InputWrap>
  );
};

export default TodoInput;
