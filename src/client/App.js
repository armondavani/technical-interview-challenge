import React, { Component } from 'react';
import './app.css';
import axios from 'axios';

import DogList from "./Components/DogList";
import SingleDog from "./Components/SingleDog"

export default class App extends Component {
  state = {
    dogBreeds: [],
    individualBreed: {},
    breedSelected: false,
  }

  async componentDidMount() {
    try {
      const response = await axios.get("api/dogBreeds");

      this.setState({
        dogBreeds: response.data.dogBreeds
      });

    } catch (err) {
      console.log(err);
    }
  }

  handleBreedClick = (e) => {
    let individualBreed = {};
    individualBreed.name = e.target.innerHTML;
    individualBreed.filename = e.target.dataset.filename;

    this.setState({
      breedSelected: true,
      individualBreed: individualBreed
    })
  }

  handleBackButtonClick = (e) => {
    this.setState({
      breedSelected: false,
      individualBreed: {}
    })
  }

  render() {
    return (
      <div>

        {this.state.breedSelected ? (
          <React.Fragment>
            <SingleDog individualBreed={this.state.individualBreed}/>
            <button onClick={this.handleBackButtonClick}>BACK</button>
          </React.Fragment>
        ) : (
          <DogList 
            dogBreeds={this.state.dogBreeds} 
            handleBreedClick={this.handleBreedClick}
          />
        )}


      </div>
    );
  }
}
