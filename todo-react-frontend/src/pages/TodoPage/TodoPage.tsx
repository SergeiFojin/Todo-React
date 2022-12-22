import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import * as S from './Todopage';
import { useTodoPage } from './hooks/useTodoPage';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';

const TodoPage = () => {
  const { todo, completeTodo, navigateToMain } = useTodoPage();
  const { t } = useTranslation();

  return (
    <S.Body>
      <LanguageSwitcher />
      <S.Header>{t('header')}</S.Header>
      <S.Todo>
        <S.TodoComplete onClick={() => completeTodo(todo._id, todo.isCompleted)}>
          <S.TodoCompleteImg
            className={cn({ notCompleted: !todo.isCompleted })}
            src="/source/checkmark.png"
            alt="checkmark.png"
          />
        </S.TodoComplete>
        <S.TodoInput
          className={cn({ completed: todo.isCompleted })}
          type="text"
          value={todo.value}
          disabled
        />
        <S.TodoBack onClick={navigateToMain}>
          <S.TodoBackImg src="/source/back.png" alt="back.png" />
        </S.TodoBack>
      </S.Todo>
    </S.Body>
  );
};

export default TodoPage;
