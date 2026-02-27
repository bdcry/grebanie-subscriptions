import type { ReactElement } from "react";

import styles from "./block-small.module.css";

type TBlockSmallProps = {
  title: string;
  count?: number;
  type: "textComp" | "buttonComp";
  currency?: string;
  buttonType?: "createSubsc";
  onClick?: () => void;
};

const BlockSmall = ({
  title,
  count,
  type,
  currency,
  buttonType,
  onClick,
}: TBlockSmallProps): ReactElement => {
  const renderElement = () => {
    if (type === "textComp") {
      return (
        <div className={styles.container}>
          <div className={styles.info}>
            <span className={styles.label}>{title}</span>
            <span
              className={`${currency ? styles["value-b"] : styles["value-extra-b"]}`}
            >
              {count}
              {currency}
            </span>
          </div>
        </div>
      );
    } else if (type === "buttonComp") {
      return (
        <div className={styles.container}>
          <div className={`${styles["info-b-comp"]}`}>
            <span className={styles.label}>{title}</span>
            <button
              onClick={onClick}
              className={`${!buttonType ? styles["button-spending"] : styles["button-add"]}`}
            />
          </div>
        </div>
      );
    }
  };
  return <>{renderElement()}</>;
};

export default BlockSmall;
