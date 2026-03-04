import type { ReactElement } from "react";

import { Card } from "../../../../shared/ui/card/card";
import styles from "./subscription-count.module.css";

const SubscriptionCount = (): ReactElement => {
  return (
    <Card>
      <div className={styles.info}>
        <span className={styles.label}>Всего подписок:</span>
        <span className={styles.value}>100</span>
      </div>
    </Card>
  );
};

export default SubscriptionCount;
