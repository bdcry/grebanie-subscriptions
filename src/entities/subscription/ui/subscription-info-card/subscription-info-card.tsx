import type { ReactElement } from "react";

import { CardLongSmallGray } from "../../../../shared/ui/card-long-small-gray/card-long-small-gray";
import type { TSubscription } from "../../model/subscription.types";
import styles from "./subscription-info-card.module.css";

type TSubscriptionInfoCardProps = {
  subscription: TSubscription;
};

export const SubscriptionInfoCard = ({
  subscription,
}: TSubscriptionInfoCardProps): ReactElement => {
  return (
    <CardLongSmallGray>
      <div className={styles.subscriptionInfo}>
        <div className={styles.column}>
          <span className={styles.label}>Подписка</span>
          <span className={styles.value}>{subscription.name}</span>
        </div>
        <div className={styles.column}>
          <span className={styles.label}>Дата оплаты</span>
          <span className={styles.value}>{subscription.nextPayment}</span>
        </div>
        <div className={styles.column}>
          <span className={styles.label}>Сумма оплаты</span>
          <span className={styles.value}>{subscription.price} р.</span>
        </div>
      </div>
      <hr className={styles.line} />
    </CardLongSmallGray>
  );
};
