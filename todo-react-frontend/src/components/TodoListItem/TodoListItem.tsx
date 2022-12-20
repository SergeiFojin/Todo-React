import React from 'react';
import cn from 'classnames';
import * as S from '../../pages/TodoPage/Todopage';
import { Todo } from '../../types/types';
import { useTodoListItem } from './hooks/useTodoListItem';

type TodoListItemProps = {
  todo: Todo;
  onClick: () => void;
}

const TodoListItem = ({ todo, onClick }: TodoListItemProps) => {
  const { completeTodo, deleteTodo } = useTodoListItem();

  return (
    <S.Todo onClick={() => onClick()}>
      <S.TodoComplete onClick={(e) => completeTodo(todo._id, todo.isCompleted, e)}>
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
      <S.TodoBack onClick={(e) => deleteTodo(todo._id, e)}>
        <S.TodoDeleteImg src="/source/remove.png" alt="remove.png" />
      </S.TodoBack>
    </S.Todo>
  );
};

export default TodoListItem;
