import React, {Component} from 'react';

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    }
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value // pra checkbox tem que usar isso

    this.setState({
      [name]: value // interpolando a chave para ser o valor do nome do objeto
    })
  }

  render() {
    return (
      <div>
        <h1>
          {' '}
          Estados e React: ferramenta incrível ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! Do Brasil ou do React, você quem
            sabe!
            <textarea
              name='estadoFavorito'
              value={ this.state.estadoFavorito } // o valor passou a ser controlado pelo estado do React
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Email
             <input
              name="email"
              type="email"
              value={ this.state.email }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Nome
             <input
              name="nome"
              type="text"
              value={ this.state.nome }
              onChange={ this.handleChange }
              />
          </label>
        </form>

        <label>
          Idade
           <input
            name="idade"
            type="number"
            value={ this.state.idade }
              onChange={ this.handleChange }
          />
        </label>

        <label>
          Vai comparecer à conferência?
           <input
            name="vaiComparecer"
            type="checkbox"
            value={ this.state.vaiComparecer } // o valor da checkbox nao fica no value, o bool fica no valor checked
            onChange={ this.handleChange }
            />
        </label>

        <label>
          Escolha sua palavra chave favorita:
           <select
            name="palavraChaveFavorita"
            value={ this.state.palavraChaveFavorita }
              onChange={ this.handleChange }>
            <option value="estado">Estado</option>
            <option value="evento">Evento</option>
            <option value="props">Props</option>
            <option value="hooks">Hooks</option>
            </select>
        </label>
      </div>
    );
  }
}

export default Form;
