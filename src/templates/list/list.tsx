import * as React from 'react';
import styles from './list.module.scss';
import ListItem from './listItem';
import {OfficeSearch} from '../../shared/models/offices';


export interface ListProps {
  offices: OfficeSearch
}

export default class OfficeList extends React.Component<ListProps> {
  render() {
    return (
      <div className={styles.row}>
        {
          this.props.offices.data.map(
            (item, index) => <ListItem key={`listItem${index}`} data={item} />
          )
        }
      </div>
    );
  }
}
