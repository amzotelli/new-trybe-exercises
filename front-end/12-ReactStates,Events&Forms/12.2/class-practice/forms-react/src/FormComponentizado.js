import React, { Component } from 'react';

import EstadoFavorito from './components/EstadoFavorito';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    };
  }
 
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value; // pra checkbox tem que usar isso

    this.setState({
      [name]: value // interpolando a chave para ser o valor do nome do objeto
    });
  }

  render() {
    return (
      <div>
        <h1>
          {' '}
          Estados e React: ferramenta incrível ou reagindo a regionalismos?
        </h1>
        {/* form é o componente pai, tem a função que manipula o estado
        funcaoQueManipulaEstado */}
        <form className='form'>
          {/* Estado Favorito é o componente filho, vou passar a função para o filho via props 
          prop.funcaoQueManipulaEstado(event), e quando ela for executada, vai mudar o estado do componente pai*/}
          <EstadoFavorito
            value={ this.state.estadoFavorito }
            handleChange={ this.handleChange }
          />

          <label>
            Email
            <input
              name='email'
              type='email'
              value={ this.state.email }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Nome
            <input
              name='nome'
              type='text'
              value={ this.state.nome }
              onChange={ this.handleChange }
            />
          </label>
        </form>

        <label>
          Idade
          <input
            name='idade'
            type='number'
            value={ this.state.idade }
            onChange={ this.handleChange }
          />
        </label>

        <label>
          Vai comparecer à conferência?
          <input
            name='vaiComparecer'
            type='checkbox'
            value={ this.state.vaiComparecer } // o valor da checkbox nao fica no value, o bool fica no valor checked
            onChange={ this.handleChange }
          />
        </label>

        <label>
          Escolha sua palavra chave favorita:
          <select
            name='palavraChaveFavorita'
            value={ this.state.palavraChaveFavorita }
            onChange={ this.handleChange }>
            <option value='estado'>Estado</option>
            <option value='evento'>Evento</option>
            <option value='props'>Props</option>
            <option value='hooks'>Hooks</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Form;
