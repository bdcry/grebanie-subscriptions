import type { TSubscription } from "../../entities/subscription/model/subscription.types";

export type TStorageSeed = {
  user: {
    username: string;
  };
  subscriptions: TSubscription[];
  dashboard: {
    // Текущее статичное значение из NextPaymentCard (не из списка подписок)
    nextPaymentCard: {
      subscriptionName: string;
      nextPayment: string;
      price: number;
    };
    totalSubscriptions: number;
    monthlySpending: number;
    predictionYears: number;
  };
  subscriptionsPage: {
    totalSubscriptions: number;
    percentAbove: number;
  };
};

export const STORAGE_SEED: TStorageSeed = {
  user: {
    username: "Тимофей",
  },
  subscriptions: [
    { id: "a1b2c3d4", name: "Яндекс Плюс", nextPayment: "01.04.2026", price: 200 },
    { id: "e5f6g7h8", name: "Netflix", nextPayment: "15.04.2026", price: 799 },
    { id: "i9j0k1l2", name: "Spotify", nextPayment: "10.04.2026", price: 299 },
    { id: "m3n4o5p6", name: "Apple Music", nextPayment: "20.04.2026", price: 249 },
    { id: "q7r8s9t0", name: "YouTube Premium", nextPayment: "05.04.2026", price: 399 },
    { id: "u1v2w3x4", name: "PS Plus", nextPayment: "25.04.2026", price: 549 },
    { id: "y5z6a7b8", name: "GitHub Copilot", nextPayment: "12.04.2026", price: 1200 },
    { id: "c9d0e1f2", name: "Notion", nextPayment: "18.04.2026", price: 150 },
  ],
  dashboard: {
    nextPaymentCard: {
      subscriptionName: "Яндекс.Плюс",
      nextPayment: "01.03.2026",
      price: 200,
    },
    totalSubscriptions: 100,
    monthlySpending: 1929,
    predictionYears: 150,
  },
  subscriptionsPage: {
    totalSubscriptions: 100,
    percentAbove: 25,
  },
};
