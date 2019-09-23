import React from "react";
import "./styles/global.scss";
import styles from "./app.module.scss";
import Header from "./templates/header";
import OfficeList from "./templates/list/list";
import { OfficeSearch } from "./models/offices";

type Sort = "asc" | "desc";
type AppState = {
  offices: OfficeSearch;
  sort: Sort;
};

class App extends React.Component<{}, AppState> {
  state = {
    offices: {
      count: 0,
      data: []
    },
    sort: "asc"
  } as AppState;

  componentDidMount() {
    fetch("http://fake.fabernovel.com/api/offices")
      .then(r => r.json())
      .then(offices => {
        this.setState({ offices });
      });
  }

  handleSearch = (query: string) => {
    const queryString = query.length > 0 ? `?query=${query}` : "";

    fetch(`http://fake.fabernovel.com/api/offices${queryString}`)
      .then(r => r.json())
      .then(offices => this.setState({ offices }));
  };

  handleSort = () => {
    this.setState(state => ({
      ...state,
      sort: state.sort === "desc" ? "asc" : "desc"
    }));
  };

  render() {
    if (this.state.offices.data && this.state.offices.data.length === 0)
      return <p>Loading</p>;
    return (
      <div className={styles.app}>
        <Header
          sort={this.state.sort}
          onSortToggle={this.handleSort}
          onSearchSubmit={this.handleSearch}
        />
        <OfficeList offices={this.state.offices} sort={this.state.sort} />
      </div>
    );
  }
}

export default App;
