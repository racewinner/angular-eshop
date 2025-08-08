
export interface SingleProduct {
  id: number;
  title: string;
  price: number;
}

export interface ProductsResponse {
  products: SingleProduct[];
}