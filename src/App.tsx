import React from 'react';
import './styles/global.scss'
import styles from './app.module.scss';
import Header from './templates/header'
import OfficeList from './templates/list/list';
import { OfficeSearch, Continent, Office } from './shared/models/offices';

type AppState = {
  offices: OfficeSearch
  continentSelected: Continent
}

class App extends React.Component<{}, AppState> {
  initialList: any
  state = {
    offices: {
      count: 0,
      data: []
    },
    continentSelected: {
      key: "",
      label: "World"
    }
  } as AppState
  
  

  getContinentList = (offices: OfficeSearch) => {
    const continentList = offices.data.map((office: Office) => {
      return office.location.continent
    })
    return [...continentList, {
      key: "",
      label: "World"
    }
    ]
  }

  componentDidMount() {
    fetch("http://fake.fabernovel.com/api/offices")
      .then(r => r.json())
      .then(offices => {
        this.initialList = offices;
        this.setState({ offices })
      })
  }

  onChangeContinent = (continent: Continent) => {

    const officesFiltered = this.initialList.data.filter((office:Office) => {
      return office.location.continent.key === continent.key
    })
    
    
    this.setState({
      continentSelected: continent,
      offices: {
        count: officesFiltered.length,
        data: (continent.key !== "") ? officesFiltered : this.initialList.data
      }
    })
  }

  render() {
    
    if(this.state.offices.data && this.state.offices.data.length === 0)
      return <p>Loading</p>
    return (
      <div className={styles.app}>
        <Header continentSelected={this.state.continentSelected} 
          onChangeContinent={this.onChangeContinent} 
          continentList={this.getContinentList(this.initialList)}
        />
        <OfficeList offices={this.state.offices} />
      </div>
    );
  }
}

export default App;
