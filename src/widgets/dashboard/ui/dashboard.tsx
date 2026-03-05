import type { ReactElement } from "react";

import PredictionCard from "../../../entities/prediction/ui/prediction-card";
import NextPaymentCard from "../../../entities/subscription/ui/next-payment-card/next-payment-card";
import SpendingCard from "../../../entities/subscription/ui/spending-card/spending-card";
import SubscriptionCount from "../../../entities/subscription/ui/subscription-count/subscription-count";
import { AddSubscriptionCard } from "../../../features/add-subscription/ui/add-subscription-card";
import { CheckSpendingCard } from "../../../features/check-spending/ui/check-spending-card";
import styles from "./dashboard.module.css";

const Dashboard = (): ReactElement => {
  return (
    <div className={styles.groupBlocks}>
      <NextPaymentCard />
      <div className={styles.groupSmallBlocks}>
        <SubscriptionCount />
        <SpendingCard />
        <AddSubscriptionCard />
        <CheckSpendingCard />
      </div>
      <PredictionCard />
    </div>
  );
};

export default Dashboard;
