import React from "react"
import styles from './header.module.css';
import Logo from "../logo"
import SearchInput from "../search-input"

type Props = {
  onSearchSubmit: (query: string) => void
}
const Header = ({ onSearchSubmit }: Props) => {
  return <div className={styles.header}>
    <Logo />
    <div className={styles.headerSearchbar}>
      <SearchInput onSubmit={onSearchSubmit} />
    </div>
  </div>
}

export default Header
