import React from 'react';
import PropTypes from 'prop-types';

class Serie extends React.Component {
  render() {
    const { serieInfo } = this.props;

    return (
      <section>
        <h1>name: {serieInfo.name}</h1>
        <img src={serieInfo.image} alt={serieInfo.name} />
        <p>Genero: {serieInfo.genre}</p>
      </section>
    )
  }
}

Serie.PropTypes = {
  catalog: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
}

export default Serie;
