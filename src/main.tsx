import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/app";
import { SubscriptionsProvider } from "./app/providers/subscriptions-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SubscriptionsProvider>
        <App />
      </SubscriptionsProvider>
    </BrowserRouter>
  </StrictMode>,
);
