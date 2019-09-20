import * as React from 'react';
import styles from './searchbar.module.scss';

export interface ISearchbarProps {
}
export interface ISearchbarState {
  textSearch: string
}

export default class Searchbar extends React.Component<ISearchbarProps, ISearchbarState> {
  constructor(props: ISearchbarProps) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.state = {
      textSearch: ""
    }
  }
  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      textSearch: e.target.value
    })
  }
  public render() {
    return (
      <div className={styles.container}>
        <input className={styles.input} type="text" name="search" value={this.state.textSearch} onChange={this.handleSearchChange} />
      </div>
    );
  }
}
