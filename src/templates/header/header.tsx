import React from "react";
import styles from "./header.module.css";
import Logo from "../logo";
import SearchInput from "../search-input";
import Sort from "../sort";

export type props = {
  onSearchSubmit: (query: string) => void;
  sort: "asc" | "desc";
  onSortToggle: () => void;
};

const Header: React.FC<props> = ({ onSearchSubmit, sort, onSortToggle }) => {
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
