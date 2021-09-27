import React from 'react';



class ButtonWithThis extends React.Component {
  constructor() {
    super()
    
    this.handleClick = this.handleClick.bind(this)

    console.log('Componente sendo construido')
    

  }

  handleClick() {
    console.log('Clicou 1!')
  }

  render() {
    console.log(this);
  return <button onClick={ this.handleClick }>Meu botão 1</button>
  }
}

export default ButtonWithThis;
