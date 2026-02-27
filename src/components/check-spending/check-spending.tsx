import type { ReactElement } from "react";

import BlockSmall from "../../shared/block-small/block-small";

const CheckSpending = (): ReactElement => {
  const title = "Посмотреть подписки";
  const type = "buttonComp";

  const moveToPageTotalSubsc = () => {
    console.log("здарова! переход на другую страницу готов");
  };

  return (
    <BlockSmall title={title} type={type} onClick={moveToPageTotalSubsc} />
  );
};

export default CheckSpending;
