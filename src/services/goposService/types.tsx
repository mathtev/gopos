export interface Product {
  id: number;
  uid: string;
  name: string;
  recipe_amount: number;
  type: string;
  category_id: number;
}

export interface Category {
  id: number;
  uid: string;
  name: string;
  updated_at: string;
  status: string;
}

export type CategoryResponse = Promise<Category[] | void>;
export type ProductResponse = Promise<Product[] | void>;

export interface GposServiceResponse<T> {
  data: T;
}


