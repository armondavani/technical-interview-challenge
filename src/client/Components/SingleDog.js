import React, { Component } from 'react';
import '../app.css';

export default class SingleDog extends Component {

  render() {
      return (
        <div>
            <h2>{this.props.individualBreed.name}</h2>
            <img className="individual-breed-image" src={`/api/dogBreedImages/${this.props.individualBreed.filename}`}></img>
        </div>
      )
  }
}