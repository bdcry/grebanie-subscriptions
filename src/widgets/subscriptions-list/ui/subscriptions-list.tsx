import type { ReactElement } from "react";

import styles from "./subscriptions-list.module.css";

export const SubscriptionsList = (): ReactElement => {
  return (
    <div className={styles.groupSubscriptions}>
      <p>Subscriptions List</p>
    </div>
  );
};
