import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { noob } = this.props.match.params
    return (<h3>Meu profile: { this.props.name }, do mundo { noob }</h3>)
  }
}

export default Profile;
