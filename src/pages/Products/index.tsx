import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import { useGoposService } from '../../services/goposService/GoposServiceProvider';
import { Product } from '../../services/goposService/types';

import './Products.css';

const Products: React.FC = () => {
  const { pathname } = useLocation();
  const { getProducts } = useGoposService();

  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    getProducts().then((resp) => resp && setProducts(resp));
  }, [getProducts]);

  return (
    <div>
      <Container className="container pt-4">
        <h2 className="pb-2">Products</h2>
        <Row className="fw-bold pb-2">
          <Col xs={2}>#</Col>
          <Col xs={4}>Name</Col>
          <Col xs={4}>Category</Col>
          <Col xs={1}>Action</Col>
        </Row>
        {products.map((product: Product, idx: number) => (
          <Row key={product.id}>
            <Col xs={2}>{idx + 1}</Col>
            <Col xs={4}>{product.name}</Col>
            <Col xs={4}>{product.category.name}</Col>
            <Col xs={1}>
              <Link
                to={pathname + '/' + product.id}
              >
                Edit
              </Link>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Products;