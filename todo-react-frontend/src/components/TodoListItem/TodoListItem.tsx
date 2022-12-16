import React from 'react';
import './TodoListItem.css';
import { Todo } from '../../types/types';
import { useTodoListItem } from './hooks/useTodoListItem';

type TodoListItemProps = {
  todo: Todo;
  onClick: () => void;
}

const TodoListItem = ({ todo, onClick }: TodoListItemProps) => {
  const { completeTodo, deleteTodo } = useTodoListItem();

  return (
    <div className="todoList-item" id={todo._id} onClick={() => onClick()}>
      <button className="todoList-item-complete" onClick={(e) => completeTodo(todo._id, todo.isCompleted, e)}>
        {todo.isCompleted && (
          <img className="todoList-item-complete-img" src="./source/checkmark.png" alt="checkmark.png" />
        )}
      </button>
      <input
        className={todo.isCompleted ? 'todoList-item-input completed' : 'todoList-item-input'}
        type="text"
        value={todo.value}
        disabled
      />
      <button className="todoList-item-delete" onClick={(e) => deleteTodo(todo._id, e)}>
        <img className="todoList-item-delete-img" src="./source/remove.png" alt="remove.png" />
      </button>
    </div>
  );
};

export default TodoListItem;
