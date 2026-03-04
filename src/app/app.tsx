import MainPage from "../pages/main-page/main-page";
import Footer from "../widgets/footer/ui/footer";
import Header from "../widgets/header/ui/header";
import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <MainPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
