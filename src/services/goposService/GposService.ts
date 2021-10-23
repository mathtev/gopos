import { axiosInstance } from '../../axiosInstance';
import { ApiResponse, Category, Product } from './types';

const getCategories = () => {
  return axiosInstance
    .get<ApiResponse<Category[]>>('ajax/219/product_categories')
    .then((resp) => resp.data.data)
    .catch((e: Error) => console.error(e));
};

const getProducts = () => {
  return axiosInstance
    .get<ApiResponse<Product[]>>('ajax/219/products?include=category')
    .then((resp) => resp.data.data)
    .catch((e: Error) => console.error(e));
};

const getCategory = (id: number) => {
  return axiosInstance
    .get<ApiResponse<Category>>(`ajax/219/product_categories/${id}`)
    .then((resp) => resp.data.data)
    .catch((e: Error) => console.error(e));
};

const searchCategories = (name: string) => {
  return axiosInstance
    .get<ApiResponse<Category[]>>(`ajax/219/product_categories?search=${name}`)
    .then((resp) => resp.data.data)
    .catch((e: Error) => console.error(e));
};

const getProduct = (id: number) => {
  return axiosInstance
    .get<ApiResponse<Product>>(`ajax/219/products/${id}?include=category`)
    .then((resp) => resp.data.data)
    .catch((e: Error) => console.error(e));
};

const updateCategory = (id: number, data: Category) => {
  return axiosInstance
    .put<ApiResponse<Category>>(`ajax/219/product_categories/${id}`, data)
    .then((resp) => resp.data.data)
    .catch((e: Error) => console.error(e));
};

const updateProduct = (id: number, data: Product) => {
  return axiosInstance
    .put<ApiResponse<Product>>(`ajax/219/products/${id}`, data)
    .then((resp) => resp.data.data)
    .catch((e: Error) => console.error(e));
};

export const service = {
  getCategories,
  getProducts,
  updateCategory,
  updateProduct,
  getProduct,
  getCategory,
  searchCategories,
};
