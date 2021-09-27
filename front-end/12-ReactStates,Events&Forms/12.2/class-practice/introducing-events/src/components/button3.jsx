import React from 'react';

function handleClick() {
  console.log('Clicou 3!')
}

class Button3 extends React.Component {
render() {
  return <button onClick={ handleClick }>Meu botão 3</button>
  }
}

export default Button3;
