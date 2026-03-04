import type { ReactElement } from "react";

import { Card } from "../../../shared/ui/card/card";
import styles from "./add-subscription-card.module.css";

export const AddSubscriptionCard = (): ReactElement => {
  const handleClick = () => {
    console.log("Добавить подписку");
  };
  return (
    <Card>
      <div className={styles.info}>
        <span className={styles.label}>Добавить подписку</span>
        <button className={styles.button} onClick={handleClick} />
      </div>
    </Card>
  );
};
