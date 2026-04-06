export type CartItem = {
    id: number;
    productId: string;
    quantity: number;
    deliveryOptionId: string;
    createdAt: string;
    updatedAt: string
    product: {
        name: string;
        image: string;
        priceCents: number;
    };
}
export type PaymentSummary = {
    cartItems: CartItem[];
    createdAt: string;
    updatedAt: string;
    totalItems: number;
    productCostCents: number;
    shippingCostCents: number;
    totalCostBeforeTaxCents: number;
    taxCents: number;
    totalCostCents: number;
}
export type OrderProduct = {
  productId: string;
  quantity: number;
  estimatedDeliveryTimeMs: number;
  product: {          // ← expanded by API
    id: string;
    image: string;
    name: string;
  };
}

export type Order = {
  id: string;
  orderTimeMs: number;
  totalCostCents: number;
  products: OrderProduct[];  // ← not tuple [], use array
}