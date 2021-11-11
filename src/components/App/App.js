import React from 'react';
import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <main className={styles.component}>
          <h1 className={styles.title}>My first React app</h1>
          <h2 className={styles.subtitle}>Hello world!</h2>
          <List/>
        </main>
      </div>
    )
  }
}

export default App;
