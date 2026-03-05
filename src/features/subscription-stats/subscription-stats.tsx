import type { ReactElement } from "react";

import { SubscriptionStatsCard } from "../../entities/subscription/ui/subscription-stats-card/subscription-stats-card";

export const SubscriptionStats = (): ReactElement => {
  const allSubs = 100;
  const percentAbove = 25;

  return (
    <SubscriptionStatsCard allSubs={allSubs} percentAbove={percentAbove} />
  );
};
