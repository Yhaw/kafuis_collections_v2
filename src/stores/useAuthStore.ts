import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id' | 'loyaltyPoints' | 'addresses'>) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
  addAddress: (address: Omit<User['addresses'][0], 'id'>) => void;
  updateAddress: (addressId: string, address: Partial<User['addresses'][0]>) => void;
  removeAddress: (addressId: string) => void;
  updateLoyaltyPoints: (points: number) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: async (email, password) => {
        // Mock login logic
        if (email && password) {
          const mockUser: User = {
            id: '1',
            email,
            firstName: 'Kofi',
            lastName: 'Asante',
            phone: '+233244123456',
            addresses: [],
            loyaltyPoints: 250,
          };
          set({ user: mockUser, isAuthenticated: true });
          return true;
        }
        return false;
      },

      register: async (userData) => {
        // Mock registration logic
        const newUser: User = {
          ...userData,
          id: Date.now().toString(),
          addresses: [],
          loyaltyPoints: 0,
        };
        set({ user: newUser, isAuthenticated: true });
        return true;
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      updateProfile: (userData) => {
        const user = get().user;
        if (user) {
          set({ user: { ...user, ...userData } });
        }
      },

      addAddress: (address) => {
        const user = get().user;
        if (user) {
          const newAddress = {
            ...address,
            id: Date.now().toString(),
          };
          set({
            user: {
              ...user,
              addresses: [...user.addresses, newAddress],
            },
          });
        }
      },

      updateAddress: (addressId, address) => {
        const user = get().user;
        if (user) {
          const updatedAddresses = user.addresses.map(addr =>
            addr.id === addressId ? { ...addr, ...address } : addr
          );
          set({
            user: {
              ...user,
              addresses: updatedAddresses,
            },
          });
        }
      },

      removeAddress: (addressId) => {
        const user = get().user;
        if (user) {
          const updatedAddresses = user.addresses.filter(addr => addr.id !== addressId);
          set({
            user: {
              ...user,
              addresses: updatedAddresses,
            },
          });
        }
      },

      updateLoyaltyPoints: (points) => {
        const user = get().user;
        if (user) {
          set({
            user: {
              ...user,
              loyaltyPoints: Math.max(0, user.loyaltyPoints + points),
            },
          });
        }
      },
    }),
    {
      name: 'kafuis-auth-storage',
    }
  )
);