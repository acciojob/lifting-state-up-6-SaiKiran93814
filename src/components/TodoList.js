import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{ marginBottom: '10px' }}>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              marginRight: '10px'
            }}
          >
            {todo.text}
          </span>
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
