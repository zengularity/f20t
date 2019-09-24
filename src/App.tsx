import React from "react";
import "./styles/global.scss";
import styles from "./app.module.scss";
import Header from "./templates/header";
import { Office } from "./models/offices";

type State = {
  sort: "asc" | "desc";
};
class App extends React.Component<{}, State> {
  state: State = {
    sort: "asc"
  };

  handleSortToggle = () => {
    this.setState({ sort: this.state.sort === "asc" ? "desc" : "asc" });
  };

  sortOffices = (office1: Office, office2: Office) => {
    if (this.state.sort === "asc") {
      return office1.location.city.localeCompare(office2.location.city);
    } else {
      return office2.location.city.localeCompare(office1.location.city);
    }
  };

  render() {
    return (
      <div className={styles.app}>
        <Header
          sort={this.state.sort}
          onSortToggle={this.handleSortToggle}
          onSearchSubmit={console.log}
        />
      </div>
    );
  }
}

export default App;
