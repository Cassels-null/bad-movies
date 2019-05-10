import React from 'react';
import MovieCard from './movieCard.jsx';

//react setup
class MovieList extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            //render a movie card for each movie recived as props
            <div id="movieList">
                {this.props.movies.map((ele)=>{return(
                    <MovieCard movie={ele}/>
                )})}
            </div>
        )
    }
}

export default MovieList