# CheeZJokes App

## Overview

The CheeZJokes App is a simple, educational exercise designed to demonstrate the capabilities of React, specifically focusing on the transition from function components to class components. Users can view, vote on, and fetch cheesy jokes, interacting with the ICanHazDadJoke API for a fun and interactive experience.

## Features

- **View Jokes**: Users can browse through a list of jokes fetched from the ICanHazDadJoke API.
- **Vote on Jokes**: Jokes can be upvoted or downvoted, with each joke displaying its current net score.
- **Fetch New Jokes**: At the click of a button, users can load a fresh batch of jokes.

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/cheezjokes.git
   cd cheezjokes

   ```

2. **Install Dependencies**

Make sure you have `node` and `npm` installed on your system, then run:

npm install

3. **Start the Application**

npm start

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

- `src/App.js`: The main application component.
- `src/JokeList.js`: Manages the state of jokes and handles fetching new jokes from the API.
- `src/Joke.js`: A presentational component for rendering individual jokes and voting buttons.
- `src/index.js`: The entry point of the application.
- `public/index.html`: The HTML file where the React app is rendered.

## Acknowledgments

- Base code for this project was provided by [Springboard](https://www.springboard.com/). Special thanks to the Springboard team for their support and for laying the groundwork for this project.
