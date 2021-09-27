import React, { Component } from 'react';
import propTypes from 'prop-types';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      cocktail: null,
    };
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
// const id = this.props.match.params.id
    const { match: { params: { id } } } = this.props;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          cocktail: response.drinks[0],
        })

      })
      .catch((error) => console.error(error));
  }

  render() {
    const { cocktail } = this.state;
    if (!cocktail) return <div>Loading...</div>
    const { strDrink, strDrinkThumb, strInstructions } = cocktail;
    return (
      <div>
        <h3>{ strDrink }</h3>
        <img src={ strDrinkThumb } alt="Drink" />
        <p> { strInstructions }</p>
      </div>
    );
  }
}

Details.propTypes = {
  match: propTypes.objectOf(propTypes.any).isRequired,
};

export default Details;
