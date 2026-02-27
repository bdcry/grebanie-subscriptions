import type { JSX } from "@emotion/react/jsx-runtime";

import styles from "./block-long-gray.module.css";

const BlockLongGray = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.label}>
          Если вы не будете тратить деньги на подписки, а откладывать, то через
        </h3>
        <h2 className={styles.years}>150 лет</h2>
        <h3 className={styles.label}>Вы купите квартиру :)</h3>
      </div>
    </div>
  );
};

export default BlockLongGray;
