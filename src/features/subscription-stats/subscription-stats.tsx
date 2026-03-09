import { type ReactElement,useContext } from "react";

import { SubscriptionsContext } from "../../app/providers/subscriptions-context";
import { SubscriptionStatsCard } from "../../entities/subscription/ui/subscription-stats-card/subscription-stats-card";

export const SubscriptionStats = (): ReactElement => {
  const { subscriptions } = useContext(SubscriptionsContext);
  const allSubs = subscriptions.length;
  const percentAbove = 100;

  return (
    <SubscriptionStatsCard allSubs={allSubs} percentAbove={percentAbove} />
  );
};
