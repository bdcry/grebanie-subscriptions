import type { JSX } from "@emotion/react/jsx-runtime";

import styles from "./block-small.module.css";

const BlockSmall = (): JSX.Element => {
  // TODO: оставить просто пустой компонент, тк он shared, передавать children из src/components уже с нужными данными(например в случаях, если у меня есть иконки или onClick) или же сделать универсальный компонент, который будет отрисовывать данные в зависимости от передаваемых пропсов. например, передавать тип начинки и в зависимости от него рисовать нужный блок..
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span className={styles.label}>Всего подписок:</span>
        <span className={styles.value}>100</span>
      </div>
    </div>
  );
};

export default BlockSmall;
