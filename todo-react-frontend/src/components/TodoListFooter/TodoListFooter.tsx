import React from 'react';
import './TodoListFooter.css'
import {Todo} from "../../types/types";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {clearCompletedThunk} from "../../store/thunks";

type TodoListFooterProps = {
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const TodoListFooter = ({setFilter}: TodoListFooterProps ) => {
    const dispatch = useAppDispatch();
    const todos: Todo[] = useAppSelector(state => state.todos);

    if (todos.length === 0) {
        return null
    }

    const clearCompleted = () => {
        dispatch(clearCompletedThunk())
    }

    return (
        <div className="todoList-footer">
            <p className="todoList-footer-left">{todos.length} item left</p>
            <div className="todoList-footer-buttons">
                <button
                    className="todoList-footer-all footer-button"
                    onClick={() => setFilter('All')}
                >
                    All
                </button>
                <button
                    className="todoList-footer-active footer-button"
                    onClick={() => setFilter('NotCompleted')}
                >
                    Active
                </button>
                <button className="todoList-footer-completed footer-button"
                        onClick={() => setFilter('Completed')}
                >
                    Completed
                </button>
            </div>
            {todos.findIndex(item => item.isCompleted) !== -1
                &&  <button
                        className="todoList-footer-clear footer-button"
                        onClick={clearCompleted}
                    >
                        Clear completed
                    </button>
            }
        </div>
    )
}

export default TodoListFooter;
