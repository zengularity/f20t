import React from "react";
import styles from "./office-list.module.scss";
import { Office } from "../../models/offices";

type Props = {
  offices: Office[];
};

const OfficeList: React.FC<Props> = ({ offices }) => (
  <div className={styles.officeList}>
    {offices.map(office => (
      <span>{office.name}</span>
    ))}
  </div>
);

export default OfficeList;
