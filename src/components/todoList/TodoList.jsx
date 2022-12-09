import React, {useState} from 'react';
import TodoListFooter from "../TodoListFooter/TodoListFooter";
import TodoListItem from "../TodoListItem/TodoListItem";
import TodoListCompleteAll from "../TodoListCompleteAll/TodoListCompleteAll";
import './TodoList.css';
const TodoList = ({todos, dispatch}) => {
    const [filter, setFilter] = useState('All');

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
                    <TodoListItem item={todo} dispatch={dispatch} key={todo.id}/>
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
