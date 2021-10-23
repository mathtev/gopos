import React from 'react';
import { Alert, Form, Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router';
import CustomAsyncSelect, {
  SelectOption,
} from '../../components/CustomAsyncSelect';
import { useGoposService } from '../../services/goposService/GoposServiceProvider';
import { Product } from '../../services/goposService/types';

interface IRouterParams {
  id: string;
}

const EditProduct: React.FC = () => {
  const id = parseInt(useParams<IRouterParams>().id);
  const { updateProduct, getProduct, searchCategories } = useGoposService();

  const [product, setProduct] = React.useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<SelectOption>();
  const [formValues, setFormValues] = React.useState({
    name: '',
    categoryName: '',
  });
  const [formStatus, setFormStatus] = React.useState({
    message: '',
    error: false,
    loading: false,
  });

  React.useEffect(() => {
    getProduct(id).then((resp) => {
      if (resp) {
        setProduct(resp);
        setFormValues({ name: resp.name, categoryName: resp.category.name });
      }
    });
  }, [getProduct, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!product || !selectedCategory) return;
    setFormStatus({ message: '', error: false, loading: true });
    const productId = id;
    const data = { ...product };
    data.category_id = selectedCategory.value;
    data.name = formValues.name;

    updateProduct(productId, data)
      .then(() =>
        setFormStatus({ message: 'Edit success', error: false, loading: false })
      )
      .catch((e: Error) =>
        setFormStatus({ message: e.message, error: true, loading: false })
      );
  };

  return (
    <div className="editProduct d-flex flex-column">
      <h3>Edit Product</h3>
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
          <Form.Label>Nazwa kategorii</Form.Label>
          <CustomAsyncSelect
            name="categoryId"
            selectedValue={selectedCategory}
            getData={searchCategories}
            handleSelectChange={setSelectedCategory}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditProduct;
