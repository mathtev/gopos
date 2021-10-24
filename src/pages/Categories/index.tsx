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
    async function fetchData() {
      const { error, data } = (await getCategories()) || {};
      data && setCategories(data);
    }
    fetchData();
  }, [getCategories]);

  return (
    <div>
      <Container className="container pt-4">
        <div className="pb-2 d-flex align-items-center">
          <span className="h2">Categories</span>
          <Link className="text-decoration-none ms-2" to={pathname + '/create'}>
            <h2> + </h2>
          </Link>
        </div>
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
