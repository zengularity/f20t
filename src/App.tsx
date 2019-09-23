import React from "react";
import "./styles/global.scss";
import styles from "./app.module.scss";
import Header from "./templates/header";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.app}>
        <Header />
      </div>
    );
  }
}

export default App;
