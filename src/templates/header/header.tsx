import React from "react";
import styles from "./header.module.css";
import Logo from "../logo";
import SearchInput from "../search-input";
import Dropdown from "../dropdown/dropdown";
import { Continent } from "../../models/offices";
import Sort from "../sort";

export type props = {
  continentList: Continent[];
  continentSelected: Continent;
  onChangeContinent: (continent: Continent) => void;
  onSearchSubmit: (query: string) => void;
  sort: "asc" | "desc";
  onSortToggle: () => void;
};

const Header: React.FC<props> = ({
  continentList,
  continentSelected,
  onChangeContinent,
  onSearchSubmit,
  sort,
  onSortToggle
}) => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.headerSearchbar}>
        <SearchInput onSubmit={onSearchSubmit} />
      </div>
      <Dropdown
        continentSelected={continentSelected}
        onChangeContinent={onChangeContinent}
        continentList={continentList}
      />
      <Sort direction={sort} onClick={onSortToggle} />
    </div>
  );
};

export default Header;
