import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), status: 'Not Completed' }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') return true;
    return todo.status === filter;
  });

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My ToDo List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="filter mb-4">
        <label>Status Filter: </label>
        <select className="form-select" onChange={e => setFilter(e.target.value)} value={filter}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
      <TodoList 
        todos={filteredTodos} 
        updateTodo={updateTodo} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
};

export default TodoApp;
