export interface Product {
  id: number;
  name: string;
  category: Category;
  type: string;
  measure_type: string;
  category_id: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface Tax {
  id: number;
  name: string;
}

export interface CreateCategoryRequest {
  id?: number;
  name: string;
}

export interface CreateProductRequest {
  id?: number;
  name: string;
  type: string;
  measure_type: string;
  category_id: number;
  tax_id: number;
}

export interface ApiResponse<T> {
  data: T;
}

export type ServiceResponse<T> = Promise<void | T>;

