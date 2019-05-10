import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


//react setup
class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    //get list of movies from server, and save to state of App
    changeGenre(){
        console.log(document.getElementById("selectGenre").value);
        this.props.getMovies(document.getElementById("selectGenre").value);
    }

    render(){
        return(
            <div id="sidebar" onChange={(e)=>{e.preventDefault(); this.changeGenre()}}>
                <div id="sideTitle">BAD MOVIES</div>
                Select Genre
                <form>
                    <select id="selectGenre">{/* list all genres as options */}
                    {this.props.genres.map((ele)=>{return(
                        <option value={ele.id}>{ele.name}</option>
                    )})}
                    </select>
                </form>
            </div>
        )
    }
}

export default Sidebar