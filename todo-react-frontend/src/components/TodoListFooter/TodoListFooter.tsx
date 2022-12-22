import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import * as S from './TodoListFooterStyles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearCompletedSaga } from '../../store/sagas/actions';
import { Todo, TodoFilterEnum } from '../../types/types';

type TodoListFooterProps = {
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const TodoListFooter = ({ setFilter }: TodoListFooterProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const todos: Todo[] = useAppSelector((state) => state.todos);

  if (todos.length === 0) {
    return null;
  }

  const clearCompleted = () => {
    dispatch(clearCompletedSaga(''));
  };

  return (
    <S.TodoListFooter>
      <S.TodoListFooterLeft>
        {t('leftTodos')}
        {todos.length}
      </S.TodoListFooterLeft>
      <S.TodoListFooterButtons>
        <S.TodoListFooterButton onClick={() => setFilter(TodoFilterEnum.ALL)}>
          {t('buttonAll')}
        </S.TodoListFooterButton>
        <S.TodoListFooterButton onClick={() => setFilter(TodoFilterEnum.NOTCOMPLETED)}>
          {t('buttonActive')}
        </S.TodoListFooterButton>
        <S.TodoListFooterButton onClick={() => setFilter(TodoFilterEnum.COMPLETED)}>
          {t('buttonCompleted')}
        </S.TodoListFooterButton>
      </S.TodoListFooterButtons>
      <S.TodoListFooterClear
        className={cn({ notVisible: todos.findIndex((item) => item.isCompleted) === -1 })}
        onClick={clearCompleted}
      >
        {t('buttonClearCompleted')}
      </S.TodoListFooterClear>
    </S.TodoListFooter>
  );
};

export default TodoListFooter;
