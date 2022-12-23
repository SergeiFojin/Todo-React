import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './TodoInputStyles';
import TodoListCompleteAll from '../TodoListCompleteAll/TodoListCompleteAll';
import { useTodoInput } from './hooks/useTodoInput';
import { FetchStatusEnum } from '../../types/types';
import * as C from '../Loader/LoaderStyles';

const TodoInput = () => {
  const { value, setValueHandler, addTodoHandler, isLoading } = useTodoInput();
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
            addTodoHandler(value);
          }
        }}
      />
      <S.AddButtonWrap>
        {
          isLoading === FetchStatusEnum.ADDLOADING
            ? <C.AddLoader />
            : (
              <S.AddButton onClick={() => addTodoHandler(value)}>
                <S.AddButtonImg src="/source/add.png" alt="add.png" />
              </S.AddButton>
            )
        }
      </S.AddButtonWrap>
    </S.InputWrap>
  );
};

export default TodoInput;
