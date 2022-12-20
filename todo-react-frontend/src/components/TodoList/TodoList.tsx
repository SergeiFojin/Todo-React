import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import * as S from './TodoListStyles';
import TodoListFooter from '../TodoListFooter/TodoListFooter';
import TodoListItem from '../TodoListItem/TodoListItem';
import { Todo, TodoFilterEnum } from '../../types/types';

const TodoList = () => {
  const [filter, setFilter] = useState<string>(TodoFilterEnum.ALL);
  const navigate = useNavigate();
  const todos: Todo[] = useAppSelector((state) => state.todos);

  if (todos.length === 0) {
    return null;
  }

  const navigateToTodo = (todo: Todo) => {
    navigate(`/todos/${todo._id}/${todo.value}/${todo.isCompleted}`);
  };
  return (
    <S.TodoListWrap>
      <S.TodoList>
        {todos.filter((todo) => {
          if (filter === TodoFilterEnum.ALL) {
            return true;
          }

          if (filter === TodoFilterEnum.COMPLETED) {
            return todo.isCompleted;
          }

          return !todo.isCompleted;
        }).map((todo) => (
          <TodoListItem
            todo={todo}
            onClick={() => navigateToTodo(todo)}
            key={todo._id}
          />
        ))}
      </S.TodoList>
      <TodoListFooter
        setFilter={setFilter}
      />
    </S.TodoListWrap>
  );
};

export default TodoList;
