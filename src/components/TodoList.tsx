import { useState } from "react";
import TodoItem from "./TodoItem";

const initialTodos = [
    { id: "1", label: "Play ball" },
    { id: "2", label: "Code all night" },
];

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    const handleDelete = (id: string) =>
        setTodos(prev => prev.filter(todo => todo.id !== id));

    if (todos.length === 0) return <p>No todos 🎉</p>;

    return (
        <ul aria-label="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} {...todo} onDelete={handleDelete} />
            ))}
        </ul>
    );
}
