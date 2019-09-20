import * as React from 'react';
import styles from './list.module.scss';
import {offices} from '../../shared/api/offices'
import ListItem from './listItem';


export interface IListProps {
}

export default class Searchbar extends React.Component<IListProps> {
  public render() {
    return (
      <div className={styles.row}>
        {
          offices.data.map(
            (item, index) => <ListItem key={`listItem${index}`} data={item} />
          )
        }
      </div>
    );
  }
}
