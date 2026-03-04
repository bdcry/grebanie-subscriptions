import type { ReactElement, ReactNode } from "react";

import styles from "./card-long-gradient.module.css";

export const CardLongGradient = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return <div className={styles.container}>{children}</div>;
};
