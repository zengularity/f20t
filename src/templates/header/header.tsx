import React from "react";
import styles from "./header.module.css";
import Logo from "../logo";
import SearchInput from "../search-input";

export type props = {
  onSearchSubmit: (query: string) => void;
};

const Header: React.FC<props> = ({ onSearchSubmit }) => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.headerSearchbar}>
        <SearchInput onSubmit={onSearchSubmit} />
      </div>
    </div>
  );
};

export default Header;
