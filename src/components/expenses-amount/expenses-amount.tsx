import type { ReactElement } from "react";

import BlockSmall from "../../shared/block-small/block-small";

const ExpensesAmount = (): ReactElement => {
  const title = "Траты за месяц";
  const totalPrice = 1929;

  return <BlockSmall title={title} count={totalPrice} type="textComp" currency="р." />;
};

export default ExpensesAmount;
