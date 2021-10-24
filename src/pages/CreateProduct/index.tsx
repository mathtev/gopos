import React from 'react';
import { Alert, Form, Button } from 'react-bootstrap';
import CustomAsyncSelect, { SelectOption } from '../../components/CustomAsyncSelect';
import { useGoposService } from '../../services/goposService/GoposServiceProvider';

import './CreateProduct.css';

const CreateProduct = () => {
  const { createProduct, searchCategories, searchTaxes } = useGoposService();

  const [formValues, setFormValues] = React.useState({
    name: '',
    categoryId: '',
  });
  const [formStatus, setFormStatus] = React.useState({
    message: '',
    error: false,
    loading: false,
  });
  const [selectedCategory, setSelectedCategory] = React.useState<SelectOption>();
  const [selectedTax, setSelectedTax] = React.useState<SelectOption>();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!selectedCategory || !selectedTax) return;
    setFormStatus({ message: '', error: false, loading: true });
    createProduct({
      name: formValues.name,
      category_id: selectedCategory.value,
      type: 'BASIC',
      measure_type: 'PACKAGE',
      tax_id: selectedTax.value,
    })
      .then(() =>
        setFormStatus({
          message: 'Create success',
          error: false,
          loading: false,
        })
      )
      .catch((e: Error) =>
        setFormStatus({ message: e.message, error: true, loading: false })
      );
  };
  return (
    <div className="createProduct d-flex flex-column">
      <h3>Create Product</h3>
      <Form onSubmit={handleSubmit}>
        {formStatus.message && !formStatus.error && (
          <Alert variant="success">{formStatus.message}</Alert>
        )}
        {formStatus.message && formStatus.error && (
          <Alert variant="danger">{formStatus.message}</Alert>
        )}
        <Form.Group className="mb-3 w-100">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            className="mb-3"
            value={formValues.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category Name</Form.Label>
          <CustomAsyncSelect
            name="categorySelect"
            selectedValue={selectedCategory}
            getData={searchCategories}
            handleSelectChange={setSelectedCategory}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tax</Form.Label>
          <CustomAsyncSelect
            name="categorySelect"
            selectedValue={selectedTax}
            getData={searchTaxes}
            handleSelectChange={setSelectedTax}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateProduct;
