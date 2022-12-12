import React, {Dispatch, useState} from 'react';
import './TodoList.css';
import {Todo} from "../../types/types";
import {TodoAction} from "../../store/actions";
import TodoListFooter from "../TodoListFooter/TodoListFooter";
import TodoListItem from "../TodoListItem/TodoListItem";
import TodoListCompleteAll from "../TodoListCompleteAll/TodoListCompleteAll";

type TodoListProps = {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
}

const TodoList = ({todos, dispatch}: TodoListProps) => {
    const [filter, setFilter] = useState<string>('All');

    if (todos.length === 0) {
        return null
    }

    return (
        <div className="todoList-wrapper">
            <TodoListCompleteAll todos={todos} dispatch={dispatch}/>
            <ul className="todoList-body">
                {todos.filter(todo => {
                    if (filter === 'All') {
                        return true
                    }

                    if (filter === 'Completed') {
                        return todo.isCompleted;
                    }

                    return !todo.isCompleted;
                }).map(todo =>
                    <TodoListItem todo={todo} dispatch={dispatch} key={todo.id}/>
                )}
            </ul>
            <TodoListFooter
                todos={todos}
                dispatch={dispatch}
                setFilter={setFilter}
            />
        </div>
    )
}

export default TodoList;
