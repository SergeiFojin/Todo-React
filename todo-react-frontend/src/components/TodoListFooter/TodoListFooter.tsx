import React from 'react';
import './TodoListFooter.css';
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
    <div className="todoList-footer">
      <p className="todoList-footer-left">
        {todos.length}
        {' '}
        item left
      </p>
      <div className="todoList-footer-buttons">
        <button
          className="todoList-footer-all footer-button"
          onClick={() => setFilter(TodoFilterEnum.ALL)}
        >
          All
        </button>
        <button
          className="todoList-footer-active footer-button"
          onClick={() => setFilter(TodoFilterEnum.NOTCOMPLETED)}
        >
          Active
        </button>
        <button
          className="todoList-footer-completed footer-button"
          onClick={() => setFilter(TodoFilterEnum.COMPLETED)}
        >
          Completed
        </button>
      </div>
      {todos.findIndex((item) => item.isCompleted) !== -1
                && (
                <button
                  className="todoList-footer-clear footer-button"
                  onClick={clearCompleted}
                >
                  Clear completed
                </button>
                )}
    </div>
  );
};

export default TodoListFooter;
