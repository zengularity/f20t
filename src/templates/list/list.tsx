import React from "react";
import styles from "./list.module.scss";

const OfficeList: React.FC = ({ children }) => (
  <div className={styles.row}>{children}</div>
);

export default OfficeList;
