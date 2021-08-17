import React, { Component } from 'react';
import '../app.css';

export default function DogCard(props) {

    return (
        <div
            className="breed-name"
            onClick={props.handleBreedClick}
            data-filename={props.breed.fileName}
        >
            {props.breed.name}
        </div>
    )

}