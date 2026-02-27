import AppFooter from "../app-footer/app-footer";
import AppHeader from "../app-header/app-header";
import BoxBlocks from "../box-blocks/box-blocks";
import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BoxBlocks />
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
