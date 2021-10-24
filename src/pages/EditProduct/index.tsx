import React from 'react';
import { Alert, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import CustomAsyncSelect, {
  SelectOption,
} from '../../components/CustomAsyncSelect';
import { useGoposService } from '../../services/goposService/GoposServiceProvider';
import { Product } from '../../services/goposService/types';
import './EditProduct.css';

interface IRouterParams {
  id: string;
}

const EditProduct: React.FC = () => {
  const id = parseInt(useParams<IRouterParams>().id);
  const { updateProduct, getProduct, searchCategories } = useGoposService();

  const [product, setProduct] = React.useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] =
    React.useState<SelectOption>();
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
    async function fetchData() {
      const { error, data } = (await getProduct(id)) || {};
      if (data) {
        setProduct(data);
        setFormValues({ name: data.name, categoryName: data.category.name });
        setSelectedCategory({
          label: data.category.name,
          value: data.category_id,
        });
      }
    }
    fetchData();
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
      .then((resp) => {
        if (resp?.error) {
          setFormStatus({
            message: resp?.error.message,
            error: true,
            loading: false,
          });
          return;
        }
        setFormStatus({
          message: 'Edit success',
          error: false,
          loading: false,
        });
      })
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
            name="categorySelect"
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
