import React from 'react';
import colors from './colorsData';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filterText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ filterText: event.target.value });
  }

  render() {
    const { filterText } = this.state;

    return (
      <main>
        <input
          value={ filterText }
          type="text"
          onChange={ this.handleChange }
        />
        <ul>
          {colors
            .filter(({ name }) => name.includes(filterText))
            .map(({ name, hex }) => (
              <li key={ hex }>
                <div style={ { background: hex } } className="color-display" />
                { name}
              </li>
            ))}
        </ul>
      </main>
    );
  }
}

export default App;
