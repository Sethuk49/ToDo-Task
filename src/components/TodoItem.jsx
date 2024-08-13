import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ ...todo });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(todo.id, editedTodo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTodo({ ...todo });
  };

  return (
    <Card className="mb-3 small-card">
      <Card.Body>
        {isEditing ? (
          <>
            <Form.Control 
              type="text" 
              value={editedTodo.name} 
              onChange={(e) => setEditedTodo({ ...editedTodo, name: e.target.value })}
              className="mb-2"
            />
            <Form.Control 
              as="textarea"
              rows={3}
              value={editedTodo.description} 
              onChange={(e) => setEditedTodo({ ...editedTodo, description: e.target.value })}
              className="mb-2"
            />
          </>
        ) : (
          <>
            <Card.Title>{todo.name}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
          </>
        )}
        <Form.Group className="mb-3">
          <Form.Select 
            value={todo.status} 
            onChange={(e) => updateTodo(todo.id, { ...todo, status: e.target.value })}
          >
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </Form.Select>
        </Form.Group>
        {isEditing ? (
          <>
            <Button variant="success" onClick={handleSave} className="me-2">Save</Button>
            <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <>
            <Button variant="primary" onClick={handleEdit} className="me-2">Edit</Button>
            <Button variant="danger" onClick={() => deleteTodo(todo.id)}>Delete</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default TodoItem;
