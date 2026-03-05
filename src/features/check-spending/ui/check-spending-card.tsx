import { useNavigate } from "react-router-dom";

import { Card } from "../../../shared/ui/card/card";
import styles from "./check-spending-card.module.css";

export const CheckSpendingCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/subscriptions");
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
