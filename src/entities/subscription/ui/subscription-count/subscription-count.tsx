import { type ReactElement, useContext } from "react";

import { SubscriptionsContext } from "../../../../app/providers/subscriptions-context";
import { Card } from "../../../../shared/ui/card/card";
import styles from "./subscription-count.module.css";

const SubscriptionCount = (): ReactElement => {
  const { subscriptions } = useContext(SubscriptionsContext);
  return (
    <Card>
      <div className={styles.info}>
        <span className={styles.label}>Всего подписок:</span>
        <span className={styles.value}>{subscriptions.length}</span>
      </div>
    </Card>
  );
};

export default SubscriptionCount;
