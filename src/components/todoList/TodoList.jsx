import React, {useState} from 'react';
import TodoListFooter from "../TodoListFooter/TodoListFooter";
import TodoListItem from "../TodoListItem/TodoListItem";
import TodoListCompleteAll from "../TodoListCompleteAll/TodoListCompleteAll";
import './TodoList.css';
const TodoList = ({todos, dispatch}) => {
    const [stateList, setStateList] = useState('All');
    let list = [];

    todos.forEach(item => {
        if (stateList === 'All') {
            list.push(<TodoListItem item={item} dispatch={dispatch} key={item.id}/>)
        } else if (stateList === item.isCompleted) {
            list.push(<TodoListItem item={item} dispatch={dispatch} key={item.id}/>)
        }
    })

    if (todos.length === 0) {
        return null
    }

    return (
        <div className="todoList-wrapper">
            <TodoListCompleteAll todos={todos} dispatch={dispatch}/>
            <ul className="todoList-body">
                {list}
            </ul>
            <TodoListFooter todos={todos}
                            dispatch={dispatch}
                            setStateList={setStateList}
            />
        </div>
    )
}

export default TodoList;
