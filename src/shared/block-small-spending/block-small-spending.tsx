import type { JSX } from "@emotion/react/jsx-runtime";

import styles from "./block-small-spending.module.css";

const BlockSmallSpending = (): JSX.Element => {
  // TODO: оставить просто пустой компонент, тк он shared, передавать children из src/components уже с нужными данными(например в случаях, если у меня есть иконки или onClick) или же сделать универсальный компонент, который будет отрисовывать данные в зависимости от передаваемых пропсов. например, передавать тип начинки и в зависимости от него рисовать нужный блок..
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span className={styles.label}>Траты за месяц:</span>
        <span className={styles.value}>1 929 р.</span>
      </div>
    </div>
  );
};

export default BlockSmallSpending;
