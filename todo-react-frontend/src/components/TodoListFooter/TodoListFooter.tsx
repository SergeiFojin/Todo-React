import React from 'react';
import cn from 'classnames';
import * as S from './TodoListFooterStyles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearCompletedSaga } from '../../store/sagas/actions';
import { Todo, TodoFilterEnum } from '../../types/types';

type TodoListFooterProps = {
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const TodoListFooter = ({ setFilter }: TodoListFooterProps) => {
  const dispatch = useAppDispatch();
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
        {todos.length}
        {' '}
        item left
      </S.TodoListFooterLeft>
      <S.TodoListFooterButtons>
        <S.TodoListFooterButton onClick={() => setFilter(TodoFilterEnum.ALL)}>
          All
        </S.TodoListFooterButton>
        <S.TodoListFooterButton onClick={() => setFilter(TodoFilterEnum.NOTCOMPLETED)}>
          Active
        </S.TodoListFooterButton>
        <S.TodoListFooterButton onClick={() => setFilter(TodoFilterEnum.COMPLETED)}>
          Completed
        </S.TodoListFooterButton>
      </S.TodoListFooterButtons>
      <S.TodoListFooterClear
        className={cn({ notVisible: todos.findIndex((item) => item.isCompleted) === -1 })}
        onClick={clearCompleted}
      >
        Clear completed
      </S.TodoListFooterClear>
    </S.TodoListFooter>
  );
};

export default TodoListFooter;
