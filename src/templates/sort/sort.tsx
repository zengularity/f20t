import React from "react";
import { ReactComponent as IconDesc } from "./sort-down.svg";
import { ReactComponent as IconAsc } from "./sort-up.svg";
import styles from "./sort.module.scss";

type Props = {
  direction: "asc" | "desc";
  onClick?: () => void;
};
const Sort = ({ direction = "asc", onClick }: Props) => {
  const Icon = direction === "desc" ? IconDesc : IconAsc;

  return (
    <button onClick={onClick} className={styles.sortButton}>
      <Icon />
    </button>
  );
};

export default Sort;
