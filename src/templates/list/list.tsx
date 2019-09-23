import * as React from "react";
import styles from "./list.module.scss";
import ListItem from "./listItem";
import { OfficeSearch } from "../../models/offices";

export interface ListProps {
  offices: OfficeSearch;
  sort: "asc" | "desc";
}

export default class OfficeList extends React.Component<ListProps> {
  render() {
    const data = this.props.offices.data.slice().sort((office1, office2) => {
      if (this.props.sort === "asc") {
        return office1.location.city.localeCompare(office2.location.city);
      } else {
        return office2.location.city.localeCompare(office1.location.city);
      }
    });

    return (
      <div className={styles.row}>
        {data.map((item, index) => (
          <ListItem key={`listItem${index}`} data={item} />
        ))}
      </div>
    );
  }
}
