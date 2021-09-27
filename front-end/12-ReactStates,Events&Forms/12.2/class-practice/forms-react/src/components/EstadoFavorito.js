import React, { Component } from 'react';

class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props

    let error = undefined
    if (value.length > 120) error = "Texto muito longo!"

    return (
      <label>
        Diga qual o seu Estado favorito! Do Brasil ou do React, você quem
        sabe!
        <textarea
          name='estadoFavorito'
          value={ value } 
          onChange={ handleChange }
        />
        <span>{ error ? error : '' }</span>
      </label>
    );
  }
}

export default EstadoFavorito;
