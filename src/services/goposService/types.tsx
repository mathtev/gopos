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

export interface ApiResponse<T> {
  data: T;
}

export type ServiceResponse<T> = Promise<void | T>;

