import React from "react";
import styles from "./office-list.module.scss";
import { Office } from "../../models/offices";
import OfficeCard from "../office-card/office-card";

type Props = {
  offices: Office[];
};

const OfficeList: React.FC<Props> = ({ offices }) => (
  <div className={styles.officeList}>
    {offices.map(office => (
      <OfficeCard data={office} />
    ))}
  </div>
);

export default OfficeList;
