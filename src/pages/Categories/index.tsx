import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useGoposService } from '../../services/goposService/GoposServiceProvider';
import { Category } from '../../services/goposService/types';

const Categories: React.FC = () => {
  const { pathname } = useLocation();
  const { getCategories } = useGoposService();

  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    getCategories().then((resp) => resp && setCategories(resp));
  }, [getCategories]);

  return (
    <div>
      <Container className="container pt-4">
        <h2 className="pb-2">Categories</h2>
        <Row className="fw-bold pb-2">
          <Col xs={1}>#</Col>
          <Col xs={5}>Name</Col>
          <Col xs={1}>Action</Col>
        </Row>
        {categories.map((category: Category, idx: number) => (
          <Row key={category.id}>
            <Col xs={1}>{idx + 1}</Col>
            <Col xs={5}>{category.name}</Col>
            <Col xs={1}>
              <Link to={pathname + '/' + category.id}>Edit</Link>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Categories;
