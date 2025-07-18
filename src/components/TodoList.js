import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          {!todo.completed && (
            <button
              data-testid={`complete-button-${todo.id}`}
              onClick={() => handleComplete(todo.id)}
            >
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
