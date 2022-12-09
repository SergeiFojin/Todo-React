const reducer = (state, action) => {
    switch(action.type) {
        case "addTodo":
            return [...state, {id: `${Date.now()}`, value: action.payload, isCompleted: false, isVisible: true}]

        case "completeTodo":
            return state.map(item => {
                if (item.id === action.payload) {
                    item.isCompleted = !item.isCompleted
                }
                return item
            })

        case "deleteTodo":
            return state.filter(item => item.id !== action.payload)

        case "completeAllTodo":
            const newTodos = [...state]
            if (newTodos.filter(item => !item.isCompleted).length !== 0) {
                newTodos.forEach(item => item.isCompleted = true)
            } else {
                newTodos.forEach(item => item.isCompleted = false)
            }
            return newTodos

        case "clearCompleted":
            return state.filter(item => !item.isCompleted)

        default:
            return state;
    }
}

export default reducer;
