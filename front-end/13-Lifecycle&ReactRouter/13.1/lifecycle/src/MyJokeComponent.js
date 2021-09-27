import React, { Component } from 'react';

class MyJokeComponent extends Component {
  constructor() {
    super();
    console.log('constructor')

    this.state = {
      piada: 'Minha piada'
    };
  }

  componentDidMount() {
    console.log('component did mount')
  }

  render() {
    console.log('render')
    return (<span>{ this.state.piada }</span>)
  }
}

export default MyJokeComponent;
