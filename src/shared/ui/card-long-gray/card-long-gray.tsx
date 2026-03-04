import type { ReactElement, ReactNode } from "react";

import styles from "./card-long-gray.module.css";

export const CardLongGray = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return <div className={styles.container}>{children}</div>;
};
