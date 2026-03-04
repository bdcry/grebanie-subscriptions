import type { JSX } from "@emotion/react/jsx-runtime";

import PredictionCard from "../../../entities/prediction/ui/prediction-card";
import SpendingCard from "../../../entities/subscription/ui/spending-card/spending-card";
import SubscriptionCard from "../../../entities/subscription/ui/subscription-card/subscription-card";
import SubscriptionCount from "../../../entities/subscription/ui/subscription-count/subscription-count";
import { AddSubscriptionCard } from "../../../features/add-subscription/ui/add-subscription-card";
import { CheckSpendingCard } from "../../../features/check-spending/ui/check-spending-card";
import styles from "./dashboard.module.css";

const Dashboard = (): JSX.Element => {
  return (
    <div className={styles.groupBlocks}>
      <SubscriptionCard />
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
