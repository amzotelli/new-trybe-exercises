import React from 'react';
import SerieList from './components/SerieList'
import catalog from './data';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Pessoas bonitas</h1>
        <SerieList catalog={catalog} />
      </div>
    );
  }
}

export default App;
