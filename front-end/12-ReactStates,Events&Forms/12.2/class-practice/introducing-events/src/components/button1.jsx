import React from 'react';

function handleClick() {
  console.log('Clicou 1!')
}

class Button1 extends React.Component {
render() {
  return <button onClick={ handleClick }>Meu botão 1</button>
  }
}

export default Button1;
