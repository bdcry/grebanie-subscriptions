import type { ReactElement } from "react";

import { Card } from "../../../../shared/ui/card/card";
import styles from "./spending-card.module.css";

const SpendingCard = (): ReactElement => {
  return (
    <Card>
      <div className={styles.info}>
        <span className={styles.label}>Траты за месяц:</span>
        <span className={styles.value}>1 929 р.</span>
      </div>
    </Card>
  );
};

export default SpendingCard;
