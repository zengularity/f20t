import React from "react";
import IconDesc from "./sort-down.svg";
import IconAsc from "./sort-up.svg";
import styles from "./sort.module.scss";

type Props = {
  direction: "asc" | "desc";
  onClick?: () => void;
};
const Sort = ({ direction = "asc", onClick }: Props) => {
  const src = direction === "desc" ? IconDesc : IconAsc;

  return (
    <button className={styles.sortButton}>
      <img src={src} onClick={onClick} alt={`sort by ${direction}`} />
    </button>
  );
};

export default Sort;
