import React, { useState } from "react";
import LoginForm from "./LoginForm";
import TodoList from "./TodoList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Todo App", completed: false },
  ]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Parent component</h1>
      {isLoggedIn ? (
        <>
          <h2 data-testid="success-msg">✅ You are now logged in!</h2>
          <TodoList todos={todos} handleComplete={handleComplete} />
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
