import React from "react";
import "./styles/global.scss";
import styles from "./app.module.scss";
import Header from "./templates/header";
import OfficeList from "./templates/list/list";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <OfficeList />
      </div>
    );
  }
}

export default App;
