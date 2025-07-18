import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false }
  ]);

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>parent component</h1>
      <h4>Child component</h4>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
