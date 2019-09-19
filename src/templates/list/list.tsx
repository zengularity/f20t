import * as React from 'react';
import styles from './list.module.css';

export interface IListProps {
}

export default class Searchbar extends React.Component<IListProps> {
  public render() {
    return (
      <div className={styles.list}>
        List
      </div>
    );
  }
}
