import type { JSX } from "@emotion/react/jsx-runtime";

import styles from "./app-header.module.css";

const AppHeader = (): JSX.Element => {
  const username = "Тимофей";

  const title =
    window.location.pathname === "/"
      ? `Здравствуйте, ${username}!`
      : "Всего подписок:";
  return (
    <>
      <header>
        <h2 className={styles.greeting}>{title}</h2>
      </header>
    </>
  );
};

export default AppHeader;
