import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LoyaltyTransaction } from '../types';

interface LoyaltyStore {
  transactions: LoyaltyTransaction[];
  addTransaction: (transaction: Omit<LoyaltyTransaction, 'id' | 'createdAt'>) => void;
  getTransactionHistory: () => LoyaltyTransaction[];
  calculatePointsFromAmount: (amount: number) => number;
  calculateDiscountFromPoints: (points: number) => number;
}

export const useLoyaltyStore = create<LoyaltyStore>()(
  persist(
    (set, get) => ({
      transactions: [],

      addTransaction: (transactionData) => {
        const newTransaction: LoyaltyTransaction = {
          ...transactionData,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
        };
        set(state => ({
          transactions: [newTransaction, ...state.transactions],
        }));
      },

      getTransactionHistory: () => {
        return get().transactions.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      },

      calculatePointsFromAmount: (amount) => {
        // 1 point per 1 GHS, rounded down to nearest hundred
        const points = Math.floor(amount);
        return Math.floor(points / 100) * 100;
      },

      calculateDiscountFromPoints: (points) => {
        // 100 points = 1 GHS
        return Math.floor(points / 100);
      },
    }),
    {
      name: 'kafuis-loyalty-storage',
    }
  )
);