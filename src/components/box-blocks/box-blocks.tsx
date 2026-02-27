import type { JSX } from "@emotion/react/jsx-runtime";

import BlockLong from "../../shared/block-long/block-long";
import BlockLongGray from "../../shared/block-long-gray/block-long-gray";
import CheckSpending from "../check-spending/check-spending";
import CreateSubsc from "../create-subsc/create-subsc";
import ExpensesAmount from "../expenses-amount/expenses-amount";
import TotalSubsc from "../total-subsc/total-subsc";
import styles from "./box-blocks.module.css";

const BoxBlocks = (): JSX.Element => {
  return (
    <div className={styles.groupBlocks}>
      <BlockLong />
      <div className={styles.groupSmallBlocks}>
        <TotalSubsc />
        <ExpensesAmount />
        <CreateSubsc />
        <CheckSpending />
      </div>
      <BlockLongGray />
    </div>
  );
};

export default BoxBlocks;
