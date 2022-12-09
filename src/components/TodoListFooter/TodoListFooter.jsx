import React from 'react';
import './TodoListFooter.css'
const TodoListFooter = ({todos, dispatch, setStateList}) => {
    if (todos.length === 0) {
        return null
    }

    return (
        todos.length
            &&   <div className="todoList-footer">
                    <p className="todoList-footer-left">{todos.length} item left</p>
                    <div className="todoList-footer-buttons">
                        <button
                            className="todoList-footer-all footer-button"
                            onClick={() => setStateList('All')}
                        >
                            All
                        </button>
                        <button
                            className="todoList-footer-active footer-button"
                            onClick={() => setStateList(false)}
                        >
                            Active
                        </button>
                        <button className="todoList-footer-completed footer-button"
                                onClick={() => setStateList(true)}
                        >
                            Completed
                        </button>
                    </div>
                    {todos.findIndex(item => item.isCompleted) !== -1
                        &&   <button
                                className="todoList-footer-clear footer-button"
                                onClick={() => dispatch ({type: "clearCompleted"})}
                            >
                                Clear completed
                            </button>
                    }
                </div>
    )
}

export default TodoListFooter;
