import { useEffect, useState } from "react";

export default function ApiTodos() {
    const [todos, setTodos] = useState<string[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("/todos.json");
                if (!res.ok) throw new Error("Bad response");
                const data: string[] = await res.json();
                setTodos(data);
            } catch {
                setError("Failed to load");
            }
        })();
    }, []);

    if (error) return <p role="alert">{error}</p>;
    if (!todos) return <p>Loading...</p>;

    return (
        <ul aria-label="api-todos">
            {todos.map((t, i) => (
                <li key={i}>{t}</li>
            ))}
        </ul>
    );
}
