import ApiTodos from "./components/ApiTodos";
import CounterButton from "./components/CounterButton";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <h1>Vite + React</h1>

      <CounterButton />
      <TodoList />
      <h2>API Todos</h2>
      <ApiTodos />
    </div>
  );
}

export default App;
