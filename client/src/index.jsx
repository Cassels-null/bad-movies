import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Sidebar from './sideBar.jsx'
// import helpers from './apiHelpers.jsx';


//react setup
class App extends React.Component {
    constructor(props){
        super(props);
        //list of movies and list of genres kept in state of App
        this.state = {
            movies: [],
            genres: [18]
        }
        this.getGenreList = this.getGenreList.bind(this);
    }

    //gets genre list from server and saves it to state
    getGenreList(){
        axios.get('http://127.0.0.1:1337/genres')
        .then((results)=>{
            this.setState({genres : results.data});
        })
        .catch((err)=>{console.log("ERROR at apiHelpers.getGenres: "+err)});
    }

    //when page is loaded, get genre list from server and save it to state
    componentDidMount(){
        this.getGenreList();
    }

    render(){
        return(
            <div id="main">this is filler<Sidebar/></div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"))