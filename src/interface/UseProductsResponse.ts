import { ProductQuery } from "./ProductQuery";

export interface UseProductsResult {
  productsQuery: ProductQuery | undefined;
  error: string | null;
  loading: boolean;
}
