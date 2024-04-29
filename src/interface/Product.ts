export interface Product {
  id: number;
  name: string;
  sku: string;
  categoryId: number;
  description: string;
  largeDescription: string;
  price: string;
  currentPrice: string;
  discountPercent: number;
  isNew: boolean;
  imageLink: string;
  otherImagesLink: string[];
  createdDate: string;
  updatedDate: string;
}
