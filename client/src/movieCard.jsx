import React from 'react';

//react setup
class MovieCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="movieCard">
                <img className="poster" 
                    src={"https://image.tmdb.org/t/p/original"+this.props.movie.poster_path}
                />
                <div className="movieTitle">{this.props.movie.title}</div>
                <div className="movieOverview">
                    {this.props.movie.overview}
                </div>
            </div>
        )
    }
}

export default MovieCard