import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      cocktails: null,
      query: '',
      loading: false,
      notFound: false,
    };
    this.handleInputQuery = this.handleInputQuery.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  
  handleInputQuery({ target: { value, name } }) {
    this.setState({
      [name]: value, // indo ao objeto e procurando alguém com name equivalente 
    });
  }

  fetchData() {
    const { query } = this.state;
    this.setState({ loading: true }, () => (
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
        .then((response) => response.json())
        .then((result) => {
          if (!result.drinks) {
            return this.setState({
              notFound: true,
              loading:false,
              cocktails: null,
            })
          }
          this.setState(
            {cocktails: result.drinks, loading: false, notFound: false}
          )
        })
        .catch((error) => console.error(error))
    ))
  }

  render() {
    const { query, loading, cocktails, notFound } = this.state;
    return (
      <div className="main">
        <label htmlFor="inputQuery">
          <input
            type="text"
            id="inputQuery"
            onChange={ this.handleInputQuery }
            name="query"
            value={ query }
          />
        </label>
        <button
          type="button"
          onClick={ this.fetchData }
        >
          Pesquisar</button>
        { loading && <div>Loading...</div> }
        {cocktails && cocktails.map((cocktail) => (
          <div className="cocktails" key={ cocktail.idDrink }>
            <Link to={`/details/${cocktail.idDrink}`}>
              <nav>{ cocktail.strDrink }</nav>
            </Link>
            <img src={cocktail.strDrinkThumb} alt={cocktail.idDrink} />
          </div>
        )) }
        {!loading && notFound && <div>Page not found</div> }
      </div>
    );
  }
}

export default Main;
