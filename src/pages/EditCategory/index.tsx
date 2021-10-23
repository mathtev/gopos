import React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router';
import { useGoposService } from '../../services/goposService/GoposServiceProvider';
import { Category } from '../../services/goposService/types';
import './EditCategory.css';

interface IRouterParams {
  id: string;
}

const EditCategory: React.FC = () => {
  const id = parseInt(useParams<IRouterParams>().id);
  const { updateCategory, getCategory } = useGoposService();

  const [category, setCategory] = React.useState<Category | null>(null);
  const [formValues, setFormValues] = React.useState({ name: '' });
  const [formStatus, setFormStatus] = React.useState({
    message: '',
    error: false,
    loading: false,
  });

  React.useEffect(() => {
    getCategory(id).then((resp) => {
      if (resp) {
        setCategory(resp);
        setFormValues({ name: resp.name });
      }
    });
  }, [getCategory, id]);

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
    updateCategory(id, { id, name: formValues.name })
      .then(() =>
        setFormStatus({ message: 'Edit success', error: false, loading: false })
      )
      .catch((e: Error) =>
        setFormStatus({ message: e.message, error: true, loading: false })
      );
  };

  return (
    <div className="editCategory d-flex flex-column">
      <h3>Edit Category</h3>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default EditCategory;
