import React, {Dispatch} from 'react';
import './TodoListCompleteAll.css';
import {Todo} from "../../types/types";
import {TodoAction, TodoActionsEnum} from "../../store/actions";

type TodoListCompleteAllProps = {
    todos: Todo[];
    dispatch: Dispatch<TodoAction>;
}

const TodoListCompleteAll = ({todos, dispatch}: TodoListCompleteAllProps) => {
    if (todos.length === 0) {
        return null
    }

    return (
        <button
            className={todos.filter(item => !item.isCompleted).length
                ? "todoList-complete-all"
                : "todoList-complete-all active"}
            onClick={() => dispatch ({type: TodoActionsEnum.COMPLETE_ALL_TODO})}
        >
            <img
                className="todoList-complete-all-img"
                src="./source/checkAll.png"
                alt="checkAll.png"
            />
        </button>
    )
}

export default TodoListCompleteAll;
