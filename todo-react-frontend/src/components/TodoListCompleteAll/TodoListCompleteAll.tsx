import React from 'react';
import './TodoListCompleteAll.css';
import {Todo} from "../../types/types";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {completeAllTodosThunk} from "../../store/thunks";

const TodoListCompleteAll = () => {
    const dispatch = useAppDispatch();
    const todos: Todo[] = useAppSelector(state => state.todos);

    if (todos.length === 0) {
        return null
    }

    const completeAllTodo = () => {
        const completeCheck = todos.length === todos.filter(item => item.isCompleted).length ? 'false' : 'true';
        dispatch(completeAllTodosThunk(completeCheck))
    }

    return (
        <button
            className={todos.filter(item => !item.isCompleted).length
                ? "todoList-complete-all"
                : "todoList-complete-all active"}
            onClick={completeAllTodo}
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
