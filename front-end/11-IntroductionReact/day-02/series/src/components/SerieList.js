import React from 'react';
import Serie from './Serie';
import PropTypes from 'prop-types';


class SerieList extends React.Component {
  render() {
    const { catalog } = this.props;
    return (
      <div className="serie-list">
        {catalog.map((serie) => <Serie key={serie.id} serieInfo={serie} />)}
      </div>
    )
  }
}

SerieList.PropTypes = {
  catalog: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    genre: PropTypes.string,
  })).isRequired,
}

SerieList.defaultProps = {
  catalog: [{
    id: 0,
    name: 'Padrão',
    image: 'Padrão',
    genre: 'Padrão',
  }],
}


export default SerieList;
