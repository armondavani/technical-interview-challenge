const express = require('express');
const os = require('os');

const app = express();
const fs = require('fs');
const path = require ('path');

app.use(express.static('dist'));

// Returns the names of all dog breeds (as well as their file names for their images)
app.get('/api/dogBreeds', (req, res) => {
    const dogBreeds = [];

    fs.readdirSync("./images/").forEach((file) => {
        var dogBreed = {};
        dogBreed.fileName = file;
        
        // Unnecessarily convoluted line to turn file name into dog breed name
        dogBreed.name = file.slice(0, -4).split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

        dogBreeds.push(dogBreed);
    });

    res.send({dogBreeds: dogBreeds})
});


// Returns an image of a single dog breed passed in
app.get('/api/dogBreedImages/:breed', (req, res) => {
    const breedName = req.params.breed;

    res.sendFile(path.resolve(__dirname + `../../../images/${breedName}`));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
