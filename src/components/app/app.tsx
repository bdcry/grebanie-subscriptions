import AppFooter from "../app-footer/app-footer";
import AppHeader from "../app-header/app-header";
import BoxBlocks from "../box-blocks/box-blocks";
import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <BoxBlocks />
      <AppFooter />
    </div>
  );
};

export default App;
