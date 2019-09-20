import React from 'react';
import styles from './app.module.css';
import Header from './templates/header'
import List from './templates/list/list';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <List />
    </div>
  );
}

export default App;
