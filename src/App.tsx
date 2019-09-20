import React from 'react';
import './styles/global.scss'
import styles from './app.module.scss';
import Header from './templates/header'
import OfficeList from './templates/list/list';
import {OfficeSearch} from './shared/models/offices';

type AppState = {
  offices: OfficeSearch
}

class App extends React.Component<{}, AppState> {
  state = {
    offices: {
      count: 0,
      data: []
    } as OfficeSearch
  }

  componentDidMount() {
    fetch("http://fake.fabernovel.com/api/offices")
      .then(r => r.json())
      .then(offices => this.setState({ offices }))
  }

  handleSearch = (query: string) => {
    const queryString = query.length > 0 ? `?query=${query}` : ''

    fetch(`http://fake.fabernovel.com/api/offices${queryString}`)
      .then(r => r.json())
      .then(offices => this.setState({ offices }))
  }

  render() {
    return (
      <div className={styles.app}>
        <Header onSearchSubmit={this.handleSearch} />
        <OfficeList offices={this.state.offices} />
      </div>
    );
  }
}

export default App;
