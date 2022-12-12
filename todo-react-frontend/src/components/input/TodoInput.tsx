import React from 'react';
import './TodoInput.css'

type TodoInputProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  addTodo: Function;
}

const TodoInput = ({value, setValue, addTodo}: TodoInputProps) => {
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
