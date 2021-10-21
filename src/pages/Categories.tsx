import React from 'react';
import { useGoposService } from '../services/goposService/GoposServiceProvider';
import { Category } from '../services/goposService/types';

const Categories = () => {
  const { categories } = useGoposService();

  return (
    <div>
      {categories.map((category: Category) => (
        <p key={category.id}>{category.name}</p>
      ))}
    </div>
  );
};

export default Categories;
