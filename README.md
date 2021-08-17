## Vetspire Take-home (max 2 hours)

Fork this repo. Build a simple full stack app using frameworks of your choice. Submit your results as a pull request
to this repo with instruction on how to build/run it or, even better, a link to where we can see it already
running/deployed. Alternatively, feel free to send us an archive file of the work.

There is probably more here than can be finished in two hours. Don't worry about completeness. Focus on what's 
important and interesting to you.   

We use `Elixir`, `Ecto`, `Absinthe`, `GraphQL`, `Typescript/Javascript` and `React` at Vetspire but you are welcome to use 
whatever languages and frameworks you prefer.

We encourage you to include a README with notes about your language and framework choices as well as your design 
decisions.

### Features
- Backend API that serves:
    - A list of available dog breeds based on those available in `/images`
    - Individual dog images by breed
- Frontend UI that provides:
    - A list of dog breeds
    - The ability to choose a breed and display the image for it
- Bonus Feature:
  - Ability to add a new breed with a new image


### My Notes
- I leveraged the following React app / express server boilerplate: 
https://github.com/crsandeep/simple-react-full-stack

- I completed the backend API features and the frontend features, but not the bonus feature.

- I did not spend time making things pretty with CSS, I'm not sure if we were supposed to or if this was just a test of my ability to complete the tasks.

- I went a bit over the 2 hour mark as I was a bit slow to get things started at the beginning, and wasn't so familiar with serving images/files via express, so I had to read some documentation. 

- For an app this small / simple, I do not believe I needed to abstract the functionality into their own components like I did, but this is more similar to how I would likely structure a real app like this, so I thought it best to replicate that. 

- To run the app, simply "npm run start"

- I chose react and express simply because I experience with them, and I do not hav eexperience with Elixir. It also felt like these were all I needed as it was such a simple app, so I did not need the likes of GraphQL for example. 