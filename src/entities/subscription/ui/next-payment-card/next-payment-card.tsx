import type { ReactElement } from "react";

import { CardLongGradient } from "../../../../shared/ui/card-long-gradient/card-long-gradient";
import type { TSubscriptions } from "../../model/subscription.types";
import styles from "./next-payment-card.module.css";

const NextPaymentCard = (): ReactElement => {
  const subscriptions: TSubscriptions = [
    {
      name: "Яндекс.Плюс",
      price: 200,
      nextPayment: "01.03.2026",
    },
  ];

  // TODO: по поводу nextPayment - подумать на будущее, стоить хранить дату последней оплаты и периодичность, а не дату следующей оплаты. переопределять её что ли.

  return (
    <CardLongGradient>
      <div className={styles.info}>
        <span className={styles.label}>Ближайшая оплата:</span>
        <p className={styles.subscription}>
          {subscriptions[0].name} <span>{subscriptions[0].nextPayment}</span>
        </p>
      </div>
      <span className={styles.price}>{subscriptions[0].price} р.</span>
    </CardLongGradient>
  );
};

export default NextPaymentCard;
