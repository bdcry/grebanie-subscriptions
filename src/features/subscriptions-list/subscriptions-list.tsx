import { type ReactElement, useContext } from "react";

import { SubscriptionsContext } from "../../app/providers/subscriptions-context";
import { SubscriptionInfoCard } from "../../entities/subscription/ui/subscription-info-card/subscription-info-card";
import styles from "./subscriptions-list.module.css";

export const SubscriptionsList = (): ReactElement => {
  const { subscriptions } = useContext(SubscriptionsContext);
  return (
    <ul className={styles.list}>
      {subscriptions.map((subscription) => (
        <li key={subscription.id} className={styles.listItem}>
          <SubscriptionInfoCard subscription={subscription} />
        </li>
      ))}
    </ul>
  );
};
