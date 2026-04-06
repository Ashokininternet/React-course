export type CartItem = {
  id: number;
  productId: string;
  quantity: number;
  deliveryOptionId: string;
  createdAt: string;
  updatedAt: string;
  product: {           // ← add this
    name: string;
    image: string;
    priceCents: number;
  };
}