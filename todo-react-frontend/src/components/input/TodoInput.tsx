import React, {useState} from 'react';
import './TodoInput.css'
import {addTodoThunk} from "../../store/thunks";
import {useAppDispatch} from "../../store/hooks";

const TodoInput = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const addTodo = (value: string) => {
    dispatch(addTodoThunk(value))
    setValue('')
  }

    return (
        <div className="input-wrapper">
            <input className="input-body"
                   type="text"
                   value={value}
                   placeholder="What needs to be done?"
                   onChange={(e) => setValue(e.target.value)}
                   onKeyDown={e => {
                       if (e.key === 'Enter') {
                         addTodo(value)
                       }
                   }}
            />
        </div>
    )
}

export default TodoInput;
