import React from 'react';
import { service } from './GposService';
import { Category, Product, ServiceResponse } from './types';

interface GoposServiceContextProps {
  getCategories: () => ServiceResponse<Category[]>;
  getProducts: () => ServiceResponse<Product[]>;
  getCategory: (id: number) => ServiceResponse<Category>;
  searchCategories: (name: string) => ServiceResponse<Category[]>;
  getProduct: (id: number) => ServiceResponse<Product>;
  updateCategory: (id: number, data: Category) => ServiceResponse<Category>;
  updateProduct: (id: number, data: Product) => ServiceResponse<Product>;
}

const GoposServiceContext =
  React.createContext<GoposServiceContextProps>({...service});

export const GoposServiceProvider: React.FC = ({ children }) => {
  const values = { ...service };

  return (
    <GoposServiceContext.Provider value={values}>
      {children}
    </GoposServiceContext.Provider>
  );
};

export const useGoposService = () => {
  return React.useContext(GoposServiceContext);
};

