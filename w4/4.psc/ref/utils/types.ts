export interface Money {
  amount: number;
  currencyCode: string;
}

export interface Product {
  id: number;
  handle: string;
  title: string;
  description: string;
  featuredImage: {
    url: string;
    altText: string;
  };
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice: Money;
  };
}

export interface Cart {
  id: number;
  productId: number;
  quantity: number;
}
