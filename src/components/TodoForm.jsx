import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.name.trim()) return;
    addTodo(todo);
    setTodo({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        type="text" 
        placeholder="Todo Name" 
        value={todo.name} 
        onChange={(e) => setTodo({ ...todo, name: e.target.value })} 
      />
      <input 
        type="text" 
        placeholder="Todo Description" 
        value={todo.description} 
        onChange={(e) => setTodo({ ...todo, description: e.target.value })} 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
