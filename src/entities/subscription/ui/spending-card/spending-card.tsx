import { type ReactElement, useContext } from "react";

import { SubscriptionsContext } from "../../../../app/providers/subscriptions-context";
import { Card } from "../../../../shared/ui/card/card";
import styles from "./spending-card.module.css";

const SpendingCard = (): ReactElement => {
  const { subscriptions } = useContext(SubscriptionsContext);
  const totalSum = subscriptions.reduce((sum, sub) => sum + sub.price, 0);
  return (
    <Card>
      <div className={styles.info}>
        <span className={styles.label}>Траты за месяц:</span>
        <span className={styles.value}>{totalSum} р.</span>
      </div>
    </Card>
  );
};

export default SpendingCard;
