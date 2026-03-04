import { Card } from "../../../shared/ui/card/card";
import styles from "./check-spending-card.module.css";

export const CheckSpendingCard = () => {
  const handleClick = () => {
    console.log("Посмотреть подписки");
  };
  return (
    <Card>
      <div className={styles.info}>
        <span className={styles.label}>Посмотреть подписки:</span>
        <button className={`${styles.button}`} onClick={handleClick} />
      </div>
    </Card>
  );
};
