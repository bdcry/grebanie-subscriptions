import type { JSX } from "@emotion/react/jsx-runtime";

import styles from "./block-long.module.css";

type TSubscription = {
  name: string;
  price: number;
  nextPayment: string;
};

type TSubscriptions = TSubscription[];

const BlockLong = (): JSX.Element => {
  const subscriptions: TSubscriptions = [
    {
      name: "Яндекс.Плюс",
      price: 200,
      nextPayment: "01.03.2026",
    },
  ];

  // TODO: по поводу nextPayment - подумать на будущее, стоить хранить дату последней оплаты и периодичность, а не дату следующей оплаты. переопределять её что ли.

  // TODO: подумать, как сделать компонент универсальным, тк другой длинный блок по дизайну не обладает такими полями. или же сделать два отдельный компонента - две заготовки для начинок. и уже на основе передаваемых данных отрисовывать нужный. например, передавать тип начинки и в зависимости от него рисовать нужный блок. или же просто делать два отдельных компонента, а не заморачиваться с универсальностью.

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span className={styles.label}>Ближайшая оплата:</span>
        <p className={styles.subscription}>
          {subscriptions[0].name} <span>{subscriptions[0].nextPayment}</span>
        </p>
      </div>
      <span className={styles.price}>{subscriptions[0].price} р.</span>
    </div>
  );
};

export default BlockLong;
