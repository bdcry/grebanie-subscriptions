import type { JSX } from "@emotion/react/jsx-runtime";

import styles from "./app-footer.module.css";

const AppFooter = (): JSX.Element => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.name}>Долбанные подписки</h2>
      </div>
      <hr className={styles.divider} />
      <div className={styles.info}>
        <p className={styles.designed}>designed by @fairyma</p>
        <p className={styles.developed}>developed by @blackbaccy</p>
      </div>
    </footer>
  );
};

export default AppFooter;
