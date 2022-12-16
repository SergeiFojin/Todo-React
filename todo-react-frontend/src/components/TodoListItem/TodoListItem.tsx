import React from 'react';
import './TodoListItem.css';
import { Todo } from '../../types/types';
import { useAppDispatch } from '../../store/hooks';
import { completeTodoThunk, deleteTodoThunk } from '../../store/thunks';

type TodoListItemProps = {
  todo: Todo;
  onClick: () => void;
}

const TodoListItem = ({ todo, onClick }: TodoListItemProps) => {
  const dispatch = useAppDispatch();

  const completeTodo = (
    todoId: string,
    todoIsCompleted: boolean,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    dispatch(completeTodoThunk(todoId, todoIsCompleted));
  };

  const deleteTodo = (
    todoId: string,
    e: React.MouseEvent<HTMLButtonElement,
      MouseEvent>,
  ) => {
    e.stopPropagation();
    dispatch(deleteTodoThunk(todoId));
  };

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
