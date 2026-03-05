import type { ReactElement } from "react";

import { CardLongGradient } from "../../../../shared/ui/card-long-gradient/card-long-gradient";
import styles from "./subscription-stats-card.module.css";

type TSubscriptionStatsCardProps = {
  allSubs: number;
  percentAbove: number;
};

export const SubscriptionStatsCard = ({
  allSubs,
  percentAbove,
}: TSubscriptionStatsCardProps): ReactElement => {
  return (
    <CardLongGradient>
      <h2 className={styles.count}>{allSubs}</h2>
      <p className={styles.title}>
        На {percentAbove}% больше, чем у других пользователей
      </p>
    </CardLongGradient>
  );
};
