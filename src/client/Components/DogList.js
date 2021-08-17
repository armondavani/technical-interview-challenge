import React, { Component } from 'react';
import '../app.css';

import DogCard from './DogCard';

export default function DogList(props) {

    return (
        <React.Fragment>
            <h2>Dog Breeds</h2>
            <div className="list-of-breeds">
                {props.dogBreeds.length === 0 ? "No breeds" : (
                    props.dogBreeds.map((breed) => {
                        return (
                            <DogCard 
                                breed={breed}
                                key={`key-${breed.name}`}
                                handleBreedClick={props.handleBreedClick}
                            />
                        );
                    })
                )}
            </div>
        </React.Fragment>
    )
}