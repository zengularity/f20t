import React from "react";
import "./styles/global.scss";
import styles from "./app.module.scss";
import Header from "./templates/header";
import OfficeList from "./templates/list/list";

class App extends React.Component<{}, {}> {
  handleSearch = (query: string) => {
    console.log({ query });
  };

  render() {
    return (
      <div className={styles.app}>
        <Header onSearchSubmit={this.handleSearch} />
        <OfficeList />
      </div>
    );
  }
}

export default App;
