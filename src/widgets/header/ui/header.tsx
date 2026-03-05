import type { JSX } from "@emotion/react/jsx-runtime";
import { useLocation } from "react-router-dom";

import styles from "./header.module.css";

const Header = (): JSX.Element => {
  const location = useLocation();
  const username = "Тимофей";

  const title =
    location.pathname === "/" ? `Здравствуйте, ${username}!` : "Мои подписки:";
  return (
    <>
      <header>
        <h2 className={styles.greeting}>{title}</h2>
      </header>
    </>
  );
};

export default Header;
