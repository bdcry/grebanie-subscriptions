import { type ReactElement } from "react";

import { STORAGE_SEED } from "../model/storage-seed";
import { SubscriptionsContext } from "./subscriptions-context";

export const SubscriptionsProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  return (
    <SubscriptionsContext.Provider value={STORAGE_SEED}>
      {children}
    </SubscriptionsContext.Provider>
  );
};
