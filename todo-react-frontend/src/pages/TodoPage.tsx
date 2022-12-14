import React, {useState} from 'react';
import {Todo} from "../types/types";
import {TodoActionsEnum} from "../store/actions";
import {completeTaskRequest} from "../API/axios";
import { useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {Dispatch} from "@reduxjs/toolkit";

type TodoPageParams = {
  _id: string;
  value: string;
  isCompleted: string
}

const TodoPage = () => {
  const dispatch: Dispatch = useAppDispatch();
  const params = useParams<TodoPageParams>();
  const navigate = useNavigate();
  const initialState = {_id: params._id!, value: params.value!, isCompleted: params.isCompleted === 'true'};
  const [todo, setTodo] = useState<Todo>(initialState);

  const completeTodo = (todoId: string, todoIsCompleted: boolean) => {
    dispatch ({
      type: TodoActionsEnum.COMPLETE_TODO,
      payload: todoId
    })

    const newTodo = {_id: todo._id, value: todo.value, isCompleted: !todo.isCompleted};
    setTodo(newTodo);
    completeTaskRequest(`${todoId}`, todoIsCompleted);
  }

  const navigateToMain = () => {
    navigate('/')
  }

  return (
    <div className="App">
      <header className="App-header">todos</header>
      <div className="todoList-item" id={todo._id}>
        <button className="todoList-item-complete" onClick={() => completeTodo(todo._id, todo.isCompleted)}>
          {todo.isCompleted &&
            (<img className="todoList-item-complete-img" src="/source/checkmark.png" alt="checkmark.png"/>)
          }
        </button>
        <input
          className={todo.isCompleted ? "todoList-item-input completed" : "todoList-item-input"}
          type="text"
          value={todo.value}
          disabled={true}
        />
        <button className="todoList-item-delete" onClick={navigateToMain}>
          <img className="todoList-item-back-img" src="/source/back.png" alt="back.png"/>
        </button>
      </div>
    </div>
  );
}

export default TodoPage;
