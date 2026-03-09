import type { JSX } from "@emotion/react/jsx-runtime";
import { useContext } from "react";

import { SubscriptionsContext } from "../../../app/providers/subscriptions-context";
import { CardLongGray } from "../../../shared/ui/card-long-gray/card-long-gray";
import styles from "./prediction-card.module.css";

const PredictionCard = (): JSX.Element => {
  const { subscriptions } = useContext(SubscriptionsContext);
  const totalYearSum =
    subscriptions.reduce((sum, sub) => sum + sub.price, 0) * 12;
  const totalYearsBeforeApartment = Math.round(12000000 / totalYearSum);
  return (
    <CardLongGray>
      <div className={styles.info}>
        <h3 className={styles.label}>
          Если вы не будете тратить деньги на подписки, а откладывать, то через
        </h3>
        <h2 className={styles.years}>{totalYearsBeforeApartment} лет</h2>
        <h3 className={styles.label}>Вы купите квартиру :)</h3>
      </div>
    </CardLongGray>
  );
};

export default PredictionCard;
