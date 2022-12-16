import React, { useState } from 'react';
import './TodoList.css';
import { useNavigate } from 'react-router-dom';
import { Todo, TodoFilterEnum } from '../../types/types';
import TodoListFooter from '../TodoListFooter/TodoListFooter';
import TodoListItem from '../TodoListItem/TodoListItem';
import TodoListCompleteAll from '../TodoListCompleteAll/TodoListCompleteAll';
import { useAppSelector } from '../../store/hooks';

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
    <div className="todoList-wrapper">
      <TodoListCompleteAll />
      <ul className="todoList-body">
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
      </ul>
      <TodoListFooter
        setFilter={setFilter}
      />
    </div>
  );
};

export default TodoList;
