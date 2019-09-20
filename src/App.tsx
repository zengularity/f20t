import React from 'react';
import './styles/global.scss'
import styles from './app.module.scss';
import Searchbar from './templates/searchbar/searchbar';
import List from './templates/list/list';


const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Searchbar />
      <List />
    </div>
  );
}

export default App;
