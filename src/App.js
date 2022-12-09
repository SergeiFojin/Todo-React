import {useReducer, useState} from "react";
import TodoInput from "./components/input/TodoInput";
import TodoList from "./components/todoList/TodoList";
import reducer from "./components/reducer/reducer";
import './App.css';

function App() {
    const [state, dispatch] = useReducer(reducer, []);
    const [value, setValue] = useState('');

    const addTodo = (value) => {
        if (value !== '') {
            dispatch ({
                type: "addTodo",
                payload: value
            })
            setValue('');
        }
    }

    return (
        <div className="App">
            <header className="App-header">todos</header>
            <TodoInput value={value} setValue={setValue} addTodo={addTodo}/>
            <TodoList todos={state} dispatch={dispatch}/>
        </div>
    );
}

export default App;
