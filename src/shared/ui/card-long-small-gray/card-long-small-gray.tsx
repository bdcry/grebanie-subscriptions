import type { ReactElement, ReactNode } from "react";

import styles from "./card-long-small-gray.module.css";

export const CardLongSmallGray = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return <div className={styles.container}>{children}</div>;
};
