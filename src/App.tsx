import React from "react";
import "./styles/global.scss";
import styles from "./app.module.scss";
import Header from "./templates/header";
import OfficeList from "./templates/list/list";

type Sort = "asc" | "desc";
type AppState = {
  sort: Sort;
};

class App extends React.Component<{}, AppState> {
  state = {
    sort: "asc"
  } as AppState;

  handleSearch = (query: string) => {
    console.log({ query });
  };

  handleSort = () => {
    this.setState(state => ({
      ...state,
      sort: state.sort === "desc" ? "asc" : "desc"
    }));
  };

  render() {
    return (
      <div className={styles.app}>
        <Header
          sort={this.state.sort}
          onSortToggle={this.handleSort}
          onSearchSubmit={this.handleSearch}
        />
        <OfficeList
          offices={{
            count: 0,
            data: []
          }}
          sort={this.state.sort}
        />
      </div>
    );
  }
}

export default App;
