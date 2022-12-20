import React from 'react';
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
        <S.TodoCompleteImg isCompleted={todo.isCompleted} src="/source/checkmark.png" alt="checkmark.png" />
      </S.TodoComplete>
      <S.TodoInput
        type="text"
        value={todo.value}
        disabled
        isCompleted={todo.isCompleted}
      />
      <S.TodoBack onClick={(e) => deleteTodo(todo._id, e)}>
        <S.TodoDeleteImg src="/source/remove.png" alt="remove.png" />
      </S.TodoBack>
    </S.Todo>
  );
};

export default TodoListItem;
