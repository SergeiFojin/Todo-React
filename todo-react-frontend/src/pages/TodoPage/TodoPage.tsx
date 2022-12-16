import React from 'react';
import { useTodoPage } from './hooks/useTodoPage';

const TodoPage = () => {
  const { todo, completeTodo, navigateToMain } = useTodoPage();

  return (
    <div className="App">
      <header className="App-header">todos</header>
      <div className="todoList-item" id={todo._id}>
        <button className="todoList-item-complete" onClick={() => completeTodo(todo._id, todo.isCompleted)}>
          {todo.isCompleted
            && (<img className="todoList-item-complete-img" src="/source/checkmark.png" alt="checkmark.png" />)}
        </button>
        <input
          className={todo.isCompleted ? 'todoList-item-input completed' : 'todoList-item-input'}
          type="text"
          value={todo.value}
          disabled
        />
        <button className="todoList-item-delete" onClick={navigateToMain}>
          <img className="todoList-item-back-img" src="/source/back.png" alt="back.png" />
        </button>
      </div>
    </div>
  );
};

export default TodoPage;
