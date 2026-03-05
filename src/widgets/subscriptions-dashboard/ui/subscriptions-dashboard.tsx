import type { ReactElement } from "react";

import { SubscriptionStats } from "../../../features/subscription-stats/subscription-stats";
import { SubscriptionsList } from "../../../features/subscriptions-list/subscriptions-list";
import styles from "./subscriptions-dashboard.module.css";

export const SubscriptionsDashboard = (): ReactElement => {
  return (
    <div className={styles.groupSubscriptions}>
      <SubscriptionStats />
      <SubscriptionsList />
    </div>
  );
};
