import React, {Dispatch} from 'react';
import './TodoListItem.css'
import {Todo} from "../../types/types";
import {TodoAction, TodoActionsEnum} from "../../store/actions";

type TodoListItemProps = {
  todo: Todo;
  dispatch: Dispatch<TodoAction>;
}

const TodoListItem = ({todo, dispatch}: TodoListItemProps) => {
    return (
        <div className="todoList-item" id={todo.id}>
                    <button className="todoList-item-complete" onClick={() => dispatch ({
                        type: TodoActionsEnum.COMPLETE_TODO,
                        payload: todo.id
                    })}>
                        {todo.isCompleted
                            && <img className="todoList-item-complete-img" src="./source/checkmark.png" alt="checkmark.png"/>
                        }
                    </button>
                    <input
                        className={todo.isCompleted ? "todoList-item-input completed" : "todoList-item-input"}
                        type="text" value={todo.value} disabled={true}/>
                    <button className="todoList-item-delete" onClick={() => dispatch ({
                        type: TodoActionsEnum.DELETE_TODO,
                        payload: todo.id
                    })}>
                        <img className="todoList-item-delete-img" src="./source/remove.png" alt="remove.png"/>
                    </button>
                </div>
    )
}

export default TodoListItem;
