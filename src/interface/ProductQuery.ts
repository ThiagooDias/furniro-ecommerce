import { Product } from "./Product";

export interface ProductQuery {
  results: number;
  startIndex: number;
  endIndex: number;
  products: Product[];
}
