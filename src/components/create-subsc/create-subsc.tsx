import type { ReactElement } from "react";

import BlockSmall from "../../shared/block-small/block-small";

const CreateSubsc = (): ReactElement => {
  const title = "Добавить подписку";
  const type = "buttonComp";
  const buttonType = "createSubsc";

  const handleCreate = () => {
    console.log("здарова! подписку добавил");
  };

  return (
    <BlockSmall
      title={title}
      type={type}
      buttonType={buttonType}
      onClick={handleCreate}
    />
  );
};

export default CreateSubsc;
