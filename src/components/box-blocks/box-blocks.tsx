import type { JSX } from "@emotion/react/jsx-runtime";

import BlockLong from "../../shared/block-long/block-long";
import BlockLongGray from "../../shared/block-long-gray/block-long-gray";
import BlockSmall from "../../shared/block-small/block-small";
import BlockSmallAddSubscr from "../../shared/block-small-add-subscr/block-small-add-subscr";
import BlockSmallCheckSpending from "../../shared/block-small-check-spending/block-small-check-spending";
import BlockSmallSpending from "../../shared/block-small-spending/block-small-spending";
import styles from "./box-blocks.module.css";

const BoxBlocks = (): JSX.Element => {
  return (
    <div className={styles.groupBlocks}>
      <BlockLong />
      <div className={styles.groupSmallBlocks}>
        <BlockSmall />
        <BlockSmallSpending />
        <BlockSmallAddSubscr />
        <BlockSmallCheckSpending />
      </div>
      <BlockLongGray />
    </div>
  );
};

export default BoxBlocks;
