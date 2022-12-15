import React from 'react';
import './TodoListCompleteAll.css';
import {Todo} from "../../types/types";
import {TodoActionsEnum} from "../../store/actions";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Dispatch} from "@reduxjs/toolkit";
import {completeTaskRequest} from "../../API/axios";

const TodoListCompleteAll = () => {
    const dispatch: Dispatch = useAppDispatch();
    const todos: Todo[] = useAppSelector(state => state.todos);

    if (todos.length === 0) {
        return null
    }

    const completeAllTodo = () => {
        dispatch ({type: TodoActionsEnum.COMPLETE_ALL_TODO});
        const completeCheck = todos.length === todos.filter(item => item.isCompleted).length ? 'false' : 'true';
        completeTaskRequest(completeCheck, true);
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
