import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const Todo = ({ data, deleteTodo, setChecked }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = () => {
    setIsChecked(!isChecked);
    setChecked(data.id, !isChecked);
  };

  console.log(isChecked);
  const todoDelete = () => {
    deleteTodo(data.id);
  };

  return (
    <div>
      <Form.Check id={`check-api-${data.id}`}>
        <Form.Check.Input
          type="checkbox"
          id={`check-api-${data.id}`}
          onClick={handleCheckbox}
        />
        <Form.Check.Label>{data.text}</Form.Check.Label>
        <Button variant="danger" size="sm" onClick={todoDelete}>
          Delete
        </Button>
      </Form.Check>
    </div>
  );
};

export default Todo;
