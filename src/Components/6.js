import React, { useState } from "react";

function Task_6() {
    const [todos, setTodos] = useState([
        { id: 1, task: "Buy groceries", completed: false },
        { id: 2, task: "Do laundry", completed: true },
        { id: 3, task: "Clean the house", completed: false },
    ]);

    const [newTodo, setNewTodo] = useState("");

    function handleNewTodoChange(event) {
        setNewTodo(event.target.value);
    }

    function handleNewTodoAdd(event) {
        event.preventDefault();

        const newId = todos.length + 1;
        const newTask = newTodo.trim();

        if (newTask) {
            setTodos([...todos, { id: newId, task: newTask, completed: false }]);
            setNewTodo("");
        }
    }

    function handleTodoToggle(id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    function handleTodoDelete(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleNewTodoAdd}>
                <input type="text" value={newTodo} onChange={handleNewTodoChange} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleTodoToggle(todo.id)}
                        />
                        <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
                            {todo.task}
                        </span>
                        <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Task_6;
