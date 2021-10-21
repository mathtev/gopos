import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { axiosInstance } from '../../axiosInstance';
import {
  Category,
  CategoryResponse,
  GposServiceResponse,
  Product,
  ProductResponse,
} from './types';

interface GoposServiceProviderProps {
  getCategories?: () => CategoryResponse;
  getProducts?: () => ProductResponse;
  getProductCategory?: (productId: number) => CategoryResponse;
}

interface GoposServiceContextProps {
  categories: Category[];
  products: Product[];
  productCategory: Category[];
}

const GoposServiceContext = React.createContext<GoposServiceContextProps>({
  categories: [],
  products: [],
  productCategory: [],
});

export const GoposServiceProvider: React.FC<GoposServiceProviderProps> = (
  props
) => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [productCategory, setProductCategory] = React.useState<Category[]>([]);

  React.useEffect(() => {
    const services = {
      getCategories: props.getCategories || getCategories,
      getProducts: props.getProducts || getProducts,
      getProductCategory: props.getProductCategory || getProductCategory,
    };

    services.getCategories().then((resp) => resp && setCategories(resp));
    services.getProducts().then((resp) => resp && setProducts(resp));
    services.getCategories().then((resp) => resp && setProductCategory(resp));
  }, []);

  const values = { categories, products, productCategory };

  return (
    <GoposServiceContext.Provider value={values}>
      {props.children}
    </GoposServiceContext.Provider>
  );
};

export const useGoposService = () => {
  return React.useContext(GoposServiceContext);
};

const getCategories = (): CategoryResponse => {
  return axiosInstance
    .get<GposServiceResponse<Category[]>>('ajax/219/product_categories')
    .then((resp) => resp.data.data)
    .catch((e: Error) => console.error(e));
};

const getProducts = (): ProductResponse => {
  return axiosInstance
    .get<GposServiceResponse<Product[]>>('ajax/219/products')
    .then((resp) => resp.data.data)
    .catch((e: Error) => console.error(e));
};

const getProductCategory = (productId: number): CategoryResponse => {
  return axiosInstance
    .get<GposServiceResponse<Category[]>>(
      `ajax/219/product_categories/${productId}`
    )
    .then((resp) => resp.data.data)
    .catch((e: Error) => console.error(e));
};
