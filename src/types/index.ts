export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: 'clothing' | 'bags' | 'shoes' | 'accessories';
  ageRange: 'baby' | 'toddler' | 'teen' | 'adult';
  sizes: string[];
  colors: string[];
  images: string[];
  description: string;
  brand?: string;
  stock: number;
  trending?: boolean;
  newArrival?: boolean;
  deal?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
  price: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  addresses: Address[];
  loyaltyPoints: number;
}

export interface Address {
  id: string;
  name: string;
  phone: string;
  region: string;
  city: string;
  landmark: string;
  digitalAddress?: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  address: Address;
  paymentMethod: string;
  createdAt: string;
  pointsEarned: number;
  pointsUsed: number;
}

export interface LoyaltyTransaction {
  id: string;
  type: 'earned' | 'redeemed';
  points: number;
  description: string;
  orderId?: string;
  createdAt: string;
}