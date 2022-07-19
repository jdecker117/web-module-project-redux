import React from 'react';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite, toggleFavorites } from './../actions/favoritesActions'

import { Link } from 'react-router-dom';

const FavoriteMovieList = (props) => {
    
    const handleClick = (movieId) => {
        props.removeFavorite(movieId)
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favs.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={()=>{handleClick(movie.id)}}class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (stateFromStore) => {
    return {
        favs: stateFromStore.favoriteReducer.favs
    }
}

export default connect(mapStateToProps, { addFavorite, removeFavorite, toggleFavorites })(FavoriteMovieList);