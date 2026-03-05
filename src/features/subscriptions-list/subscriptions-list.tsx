import type { ReactElement } from "react";

import { MOCK_SUBSCRIPTIONS } from "../../entities/subscription/model/subscription.mock";
import { SubscriptionInfoCard } from "../../entities/subscription/ui/subscription-info-card/subscription-info-card";
import styles from "./subscriptions-list.module.css";

export const SubscriptionsList = (): ReactElement => {
  return (
    <ul className={styles.list}>
      {MOCK_SUBSCRIPTIONS.map((subscription) => (
        <li key={subscription.id} className={styles.listItem}>
          <SubscriptionInfoCard subscription={subscription} />
        </li>
      ))}
    </ul>
  );
};
