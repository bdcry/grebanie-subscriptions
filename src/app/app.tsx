import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/main-page/main-page";
import { SubscriptionsList } from "../widgets/subscriptions-list/ui/subscriptions-list";
import { MainLayout } from "./routes/main-layout";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/subscriptions" element={<SubscriptionsList />} />
      </Route>
    </Routes>
  );
};

export default App;
