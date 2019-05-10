const axios = require('axios');
const API_KEY = require('./../env.js');

var scribe = {
    getGenres : (req, res)=>{
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+API_KEY)
        .then((result)=>{
            res.send(result.data.genres);
        })
        .catch((err)=>{
            console.log("ERROR at scribe.getGenres: "+err)
        })
    },
    getMovies : (req, res)=>{
        axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=vote_avrage.asc&vote_count.gte=1&with_genres='+req.query.genre_id+'&api_key='+API_KEY)
        .then((result)=>{
            res.send(result.data.results);
        })
        .catch((err)=>{
            console.log("ERROR at scribe.getGenres: "+err)
        })
    }
}

module.exports = scribe;