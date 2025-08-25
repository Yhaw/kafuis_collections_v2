import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '../types';

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (newItem) => {
        const items = get().items;
        const existingItemIndex = items.findIndex(
          item => item.productId === newItem.productId && 
                  item.size === newItem.size && 
                  item.color === newItem.color
        );

        if (existingItemIndex >= 0) {
          const updatedItems = [...items];
          updatedItems[existingItemIndex].quantity += newItem.quantity;
          set({ items: updatedItems });
        } else {
          set({ items: [...items, newItem] });
        }
      },

      updateQuantity: (productId, size, color, quantity) => {
        const items = get().items;
        if (quantity <= 0) {
          get().removeItem(productId, size, color);
          return;
        }
        
        const updatedItems = items.map(item =>
          item.productId === productId && item.size === size && item.color === color
            ? { ...item, quantity }
            : item
        );
        set({ items: updatedItems });
      },

      removeItem: (productId, size, color) => {
        const items = get().items;
        const updatedItems = items.filter(
          item => !(item.productId === productId && item.size === size && item.color === color)
        );
        set({ items: updatedItems });
      },

      clearCart: () => set({ items: [] }),
      
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
    }),
    {
      name: 'kafuis-cart-storage',
    }
  )
);