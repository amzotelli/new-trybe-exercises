import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <p>Meu about</p>
        <Link to="/">Voltar à home</Link>
      </div>
    );
  }
}

export default About;
