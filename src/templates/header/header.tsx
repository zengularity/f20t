import React from "react"
import styles from './header.module.css';
import Logo from "../logo"
import SearchInput from "../search-input"

const Header = () => {
  return <div className={styles.header}>
    <Logo />
    <div className={styles.headerSearchbar}>
      <SearchInput />
    </div>
  </div>
}

export default Header
