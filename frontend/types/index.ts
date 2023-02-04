export interface CartItemProps {
  id: number;
  title: string;
  price: number;
  quantity?: number;
  image: string;
  swatchColor: string;
  swatchTitle: string;
  estimatedDeliveryDate?: string;
}

export interface CartState {
  cartItems: CartItemProps[];
  price?: {
    subtotal: number;
    taxes: number;
    shipping: number;
    total: number;
  }
}