import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useGoposService } from '../../services/goposService/GoposServiceProvider';

import './CreateCategory.css';

const CreateCategory = () => {
  const { createCategory } = useGoposService();

  const [formValues, setFormValues] = React.useState({ name: '' });
  const [formStatus, setFormStatus] = React.useState({
    message: '',
    error: false,
    loading: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ message: '', error: false, loading: true });
    createCategory({ name: formValues.name })
      .then(() =>
        setFormStatus({ message: 'Create success', error: false, loading: false })
      )
      .catch((e: Error) =>
        setFormStatus({ message: e.message, error: true, loading: false })
      );
  };
  return (
    <div className="editCategory d-flex flex-column">
      <h3>Create Category</h3>
      <Form onSubmit={handleSubmit}>
        {formStatus.message && !formStatus.error && (
          <Alert variant="success">{formStatus.message}</Alert>
        )}
        {formStatus.message && formStatus.error && (
          <Alert variant="danger">{formStatus.message}</Alert>
        )}
        <Form.Group className="mb-3 w-100">
          <Form.Label>Category name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            className="mb-3"
            value={formValues.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateCategory;
