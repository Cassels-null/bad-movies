import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Sidebar from './sideBar.jsx'
import MovieList from './movieList.jsx'

//react setup
class App extends React.Component {
    constructor(props){
        super(props);
        //list of movies and list of genres kept in state of App
        this.state = {
            movies: [],
            genres: [{id:1, name:"Action"}]
        }
        this.getGenreList = this.getGenreList.bind(this);
        this.getMovies = this.getMovies.bind(this);
    }

    //gets genre list from server and saves it to state
    getGenreList(){
        axios.get('http://127.0.0.1:1337/genres')
        .then((results)=>{
            this.setState({genres : results.data});
        })
        .catch((err)=>{console.log("ERROR at App.getGenres: "+err)});
    }

    //gets list of bad movies of a genre, and saves it to state
    getMovies(genre_id){
        console.log(genre_id);
        axios.get('http://127.0.0.1:1337/movies?genre_id='+genre_id)
        .then((results)=>{
            this.setState({movies : results.data});
        })
        .catch((err)=>{console.log("ERROR at App.getMovies: "+err)});
    }

    //when page is loaded, get genre list from server and save it to state
    componentDidMount(){
        this.getGenreList();
    }

    render(){
        return(
            <div id="main">
                <Sidebar genres={this.state.genres} getMovies={this.getMovies}/>
                <MovieList movies={this.state.movies}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"))