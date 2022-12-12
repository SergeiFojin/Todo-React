import React, {Dispatch} from 'react';
import './TodoListItem.css'
import {Todo} from "../../types/types";
import {TodoAction, TodoActionsEnum} from "../../store/actions";

type TodoListItemProps = {
  todo: Todo;
  dispatch: Dispatch<TodoAction>;
}

const TodoListItem = ({todo, dispatch}: TodoListItemProps) => {

  const completeTodo = (todoId: string) => {
    dispatch ({
      type: TodoActionsEnum.COMPLETE_TODO,
      payload: todoId
    })
  }

  const deleteTodo = (todoId: string) => {
    dispatch ({
      type: TodoActionsEnum.DELETE_TODO,
      payload: todoId
    })
  }

    return (
        <div className="todoList-item" id={todo.id}>
                    <button className="todoList-item-complete" onClick={() => completeTodo(todo.id)}>
                        {todo.isCompleted
                            && <img className="todoList-item-complete-img" src="./source/checkmark.png" alt="checkmark.png"/>
                        }
                    </button>
                    <input
                        className={todo.isCompleted ? "todoList-item-input completed" : "todoList-item-input"}
                        type="text"
                        value={todo.value}
                        disabled={true}
                    />
                    <button className="todoList-item-delete" onClick={() => deleteTodo(todo.id)}>
                        <img className="todoList-item-delete-img" src="./source/remove.png" alt="remove.png"/>
                    </button>
        </div>
    )
}

export default TodoListItem;
