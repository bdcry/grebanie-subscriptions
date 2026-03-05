import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/main-page/main-page";
import { SubscriptionsPage } from "../pages/subscriptions-page/subscriptions-page";
import { MainLayout } from "./routes/main-layout";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
