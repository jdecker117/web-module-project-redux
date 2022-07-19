import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, toggleFavorites } from './../actions/favoritesActions'

const MovieHeader = (props) => {
    console.log(props.toggleFavorites)
    const handleClick = () => {
        props.toggleFavorites()
    }
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{props.appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div onClick={handleClick} className="btn btn-sm btn-primary"><span>{ props.displayFavs ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = (stateFromStore) => {
    console.log("statefromstore in movies", addFavorite)
    return {
        appTitle: stateFromStore.movieReducer.appTitle,
        displayFavs: stateFromStore.favoriteReducer.displayFavs
    }
}

export default connect(mapStateToProps, { toggleFavorites })(MovieHeader);