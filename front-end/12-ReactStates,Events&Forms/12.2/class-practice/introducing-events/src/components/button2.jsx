import React from 'react';

function handleClick() {
  console.log('Clicou 2!')
}

class Button2 extends React.Component {
render() {
  return <button onClick={ handleClick }>Meu botão 2</button>
  }
}

export default Button2;
