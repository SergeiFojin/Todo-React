import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Todo } from '../types/types';
import { useAppDispatch } from '../store/hooks';
import { completeTodoThunk } from '../store/thunks';

type TodoPageParams = {
  _id: string;
  value: string;
  isCompleted: string
}

const TodoPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams<TodoPageParams>();
  const navigate = useNavigate();
  const initialState = { _id: params._id || '', value: params.value || '', isCompleted: params.isCompleted === 'true' };
  const [todo, setTodo] = useState<Todo>(initialState);

  const completeTodo = (todoId: string, todoIsCompleted: boolean) => {
    dispatch(completeTodoThunk(todoId, todoIsCompleted));
    setTodo({ ...todo, isCompleted: !todo.isCompleted });
  };

  const navigateToMain = () => {
    navigate('/');
  };

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
