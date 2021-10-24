import { axiosInstance } from '../../axiosInstance';
import {
  ApiResponse,
  Category,
  CreateCategoryRequest,
  CreateProductRequest,
  Product,
  Tax,
} from './types';

//error handling to be improved

const getCategories = () => {
  return axiosInstance
    .get<ApiResponse<Category[]>>('ajax/219/product_categories')
    .then((resp) => {
      if (resp.status === 200) return { data: resp.data.data };
      return {
        error: { message: 'error in search categories' },
      };
    })
    .catch((e: Error) => {
      console.error(e);
      return {
        error: { message: e.message },
      };
    });
};

const getProducts = () => {
  return axiosInstance
    .get<ApiResponse<Product[]>>('ajax/219/products?include=category')
    .then((resp) => {
      if (resp.status === 200) return { data: resp.data.data };
      return {
        error: { message: 'error in search categories' },
      };
    })
    .catch((e: Error) => {
      console.error(e);
      return {
        error: { message: e.message },
      };
    });
};

const searchTaxes = (name: string) => {
  return axiosInstance
    .get<ApiResponse<Tax[]>>(`ajax/219/taxes?search=${name}`)
    .then((resp) => {
      if (resp.status === 200) return { data: resp.data.data };
      return {
        error: { message: 'error in search categories' },
      };
    })
    .catch((e: Error) => {
      console.error(e);
      return {
        error: { message: e.message },
      };
    });
};

const getCategory = (id: number) => {
  return axiosInstance
    .get<ApiResponse<Category>>(`ajax/219/product_categories/${id}`)
    .then((resp) => {
      if (resp.status === 200) return { data: resp.data.data };
      return {
        error: { message: 'error in search categories' },
      };
    })
    .catch((e: Error) => {
      console.error(e);
      return {
        error: { message: e.message },
      };
    });
};

const searchCategories = (name: string) => {
  return axiosInstance
    .get<ApiResponse<Category[]>>(`ajax/219/product_categories?search=${name}`)
    .then((resp) => {
      if (resp.status === 200) return { data: resp.data.data };
      return {
        error: { message: 'error in search categories' },
      };
    })
    .catch((e: Error) => {
      console.error(e);
      return {
        error: { message: e.message },
      };
    });
};

const getProduct = (id: number) => {
  return axiosInstance
    .get<ApiResponse<Product>>(`ajax/219/products/${id}?include=category`)
    .then((resp) => {
      if (resp.status === 200) return { data: resp.data.data };
      return {
        error: { message: 'error in search categories' },
      };
    })
    .catch((e: Error) => {
      console.error(e);
      return {
        error: { message: e.message },
      };
    });
};

const createProduct = (data: CreateProductRequest) => {
  return axiosInstance
    .post<ApiResponse<Product>>(`ajax/219/products`, data)
    .then((resp) => {
      if (resp.status === 200) return { data: resp.data.data };
      return {
        error: { message: 'error in search categories' },
      };
    })
    .catch((e: Error) => {
      console.error(e);
      return {
        error: { message: e.message },
      };
    });
};

const createCategory = (data: CreateCategoryRequest) => {
  return axiosInstance
    .post<ApiResponse<Category>>(`ajax/219/product_categories`, data)
    .then((resp) => {
      if (resp.status === 200) return { data: resp.data.data };
      return {
        error: { message: 'error in search categories' },
      };
    })
    .catch((e: Error) => {
      console.error(e);
      return {
        error: { message: e.message },
      };
    });
};

const updateCategory = (id: number, data: Category) => {
  return axiosInstance
    .put<ApiResponse<Category>>(`ajax/219/product_categories/${id}`, data)
    .then((resp) => {
      if (resp.status === 200) return { data: resp.data.data };
      return {
        error: { message: 'error in search categories' },
      };
    })
    .catch((e: Error) => {
      console.error(e);
      return {
        error: { message: e.message },
      };
    });
};

const updateProduct = (id: number, data: Product) => {
  return axiosInstance
    .put<ApiResponse<Product>>(`ajax/219/products/${id}`, data)
    .then((resp) => {
      if (resp.status === 200) return { data: resp.data.data };
      return {
        error: { message: 'error in search categories' },
      };
    })
    .catch((e: Error) => {
      console.error(e);
      return {
        error: { message: e.message },
      };
    });
};

export const service = {
  getCategories,
  getProducts,
  updateCategory,
  updateProduct,
  getProduct,
  getCategory,
  searchCategories,
  searchTaxes,
  createProduct,
  createCategory,
};
