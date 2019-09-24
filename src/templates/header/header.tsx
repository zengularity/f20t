import React from "react";
import styles from "./header.module.css";
import Logo from "../logo";
import SearchInput from "../search-input";
import Sort from "../sort";

export type Props = {
  sort: "asc" | "desc";
  onSortToggle: () => void;
  onSearchSubmit: (query: string) => void;
};

const Header = ({ sort, onSortToggle, onSearchSubmit }: Props) => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.headerSearchbar}>
        <SearchInput onSubmit={onSearchSubmit} />
      </div>
      <Sort direction={sort} onClick={onSortToggle} />
    </div>
  );
};

export default Header;
