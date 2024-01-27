import React from 'react';
import axios from 'axios'; 
import Joke from './Joke';
import './JokeList.css';

class JokeList extends React.Component {
    constructor(props) {
        super(props); 
        this.state = { jokes: [] }; 

        this.generateNewJokes = this.generateNewJokes.bind(this);
        this.vote = this.vote.bind(this);
    }

    // componentDidMount - lifecycle method that gets called after the component is first rendered in the DOM
    componentDidMount() {
        if (this.state.jokes.length === 0) {
            this.getJokes(); // If no jokes, we call getJokes to fetch them
        }
    }

    // getJokes - method for fetching jokes from the API
    async getJokes() {
        let j = [...this.state.jokes]; // Copy of the current jokes
        let seenJokes = new Set(); // Tracks jokes seen

        try {
            while (j.length < this.props.numJokesToGet) { 
                let res = await axios.get("https://icanhazdadjoke.com", {
                    headers: { Accept: "application/json" }
                });
                let { status, ...jokeObj } = res.data;
      
                if (!seenJokes.has(jokeObj.id)) { 
                    seenJokes.add(jokeObj.id); 
                    j.push({ ...jokeObj, votes: 0 }); 
                } else {
                    console.error("duplicate found!");
                }
            }
            this.setState({ jokes: j }); 
        } catch (e) {
            console.log(e);
        }
    }

    // generateNewJokes - clears the current jokes and fetches new ones
    generateNewJokes() {
        this.setState({ jokes: [] });
    }

    // vote - called when a user votes on a joke
    vote(id, delta) {
        this.setState(allJokes => ({
            jokes: allJokes.jokes.map(j => (
                j.id === id ? { ...j, votes: j.votes + delta } : j
            ))
        }));
    }

    // render - what gets displayed on the screen
    render() {
        if (this.state.jokes.length) { 
            let sortedJokes = [...this.state.jokes].sort((a, b) => b.votes - a.votes); 
      
            return (
                <div className="JokeList">
                    <button className="JokeList-getmore" onClick={this.generateNewJokes}>
                        Get New Jokes
                    </button>
          
                    {sortedJokes.map(j => (
                        <Joke text={j.joke} key={j.id} id={j.id} votes={j.votes} vote={this.vote} />
                    ))}
                </div>
            );
        }
  
        // If no jokes are loaded yet, show a loading message
        return <div>Loading...</div>;
    }
}

export default JokeList;
