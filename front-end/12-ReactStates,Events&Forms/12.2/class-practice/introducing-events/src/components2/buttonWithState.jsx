import React from 'react';

class ButtonWithState extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    console.log(this);
  return <button onClick={ this.handleClick }>{ this.state.numeroDeCliques }</button>
  }
}

export default ButtonWithState;
