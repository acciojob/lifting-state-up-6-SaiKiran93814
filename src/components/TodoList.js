import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span style={{ marginRight: '10px' }}>
            {todo.text}
          </span>
          {!todo.completed && (
            <button
              onClick={() => handleComplete(todo.id)}
              data-testid={`complete-button-${todo.id}`}
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
