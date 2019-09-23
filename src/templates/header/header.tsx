import React from "react"
import styles from './header.module.css'
import Logo from "../logo"
import SearchInput from "../search-input"
import Dropdown from "../dropdown/dropdown"
import {Continent} from '../../shared/models/offices'

export type headerProps = {
  continentList: Continent[]
  continentSelected: Continent
  onChangeContinent: (continent: Continent) => void
}

const Header:React.FC<headerProps> = ({continentList, continentSelected, onChangeContinent}) => {
  
  return <div className={styles.header}>
    <Logo />
    <div className={styles.headerSearchbar}>
      <SearchInput />
    </div>
    <Dropdown continentSelected={continentSelected} onChangeContinent={onChangeContinent} continentList={continentList} />
  </div>
}

export default Header
