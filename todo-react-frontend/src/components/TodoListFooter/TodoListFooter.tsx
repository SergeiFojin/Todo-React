import React, {Dispatch} from 'react';
import './TodoListFooter.css'
import {Todo} from "../../types/types";
import {TodoAction, TodoActionsEnum} from "../../store/actions";
import {deleteTaskRequest} from "../../API/axios";

type TodoListFooterProps = {
    todos: Todo[];
    dispatch: Dispatch<TodoAction>;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const TodoListFooter = ({todos, dispatch, setFilter}: TodoListFooterProps ) => {
    if (todos.length === 0) {
        return null
    }

    const clearCompleted = () => {
        dispatch ({type: TodoActionsEnum.CLEAR_COMPLETED});
        deleteTaskRequest('')
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
                        onClick={() => clearCompleted()}
                    >
                        Clear completed
                    </button>
            }
        </div>
    )
}

export default TodoListFooter;
