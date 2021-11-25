import React from 'react';
import { listData } from './../../data/dataStore';
import styles from './App.scss';
import List from './../List/List';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <main className={styles.component}>
          <h1 className={styles.title}>My first React app</h1>
          <h2 className={styles.subtitle}>Hello world!</h2>
          <List>
          </List>
        </main>
      </div>
    )
  }
}

export default App;


/*title={['Things to do ', <sup>soon!</sup>]}>
<p>I'm planning on doing all these things sooner, rather than later!</p>*/