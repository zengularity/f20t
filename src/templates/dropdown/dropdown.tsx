import * as React from 'react';
import { Continent } from '../../shared/models/offices';
import { ReactComponent as ChevronIcon } from '../../styles/icons/chevron-icon.svg';
import styles from './dropdown.module.scss';

type props = {
  continentList: Continent[]
  continentSelected: Continent
  onChangeContinent: (continent: Continent) => void
}


class Dropdown extends React.Component<props, {}> {
  state = {
    displayList: false
  }

  renderItemList = (continent: Continent, index: number) => {
    return (
      <div className={styles.item} key={index} 
        onClick={() => { 
          this.props.onChangeContinent({ "key": continent.key, "label": continent.label })
          this.setState({displayList: false})
        }}>
        {continent.label}
      </div>
    )
  }

  render() {
    const { continentSelected, continentList } = this.props

    return (
      <div className={styles.container}>
        <div onClick={() => this.setState({ displayList: !this.state.displayList })} className={styles.selector}>
          {continentSelected.label} <ChevronIcon className={styles.chevronIcon} />
        </div>
        {(this.state.displayList) &&
          <div className={styles.list}>
            {
              continentList.map((continent, index) => {
                return this.renderItemList(continent, index)
              })
            }
          </div>
        }
      </div>
    )
  }

}

export default Dropdown
