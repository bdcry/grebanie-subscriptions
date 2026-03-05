import { Outlet } from "react-router-dom";

import Footer from "../../widgets/footer/ui/footer";
import Header from "../../widgets/header/ui/header";
import styles from "./main-layout.module.css";

export const MainLayout = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
