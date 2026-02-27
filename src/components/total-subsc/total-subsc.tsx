import type { ReactElement } from "react";

import BlockSmall from "../../shared/block-small/block-small";

const TotalSubsc = (): ReactElement => {
  const title = "Всего подписок";
  const totalCountSubs = 100;
  return <BlockSmall title={title} count={totalCountSubs} type="textComp" />;
};

export default TotalSubsc;
