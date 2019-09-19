import React from 'react';
import styles from './app.module.css';
import Searchbar from './templates/searchbar/searchbar';
import List from './templates/list/list';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Searchbar />
      <List />
    </div>
  );
}

export default App;
