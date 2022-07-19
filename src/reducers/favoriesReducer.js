import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from '../actions/favoritesActions';

const initialState = {
    favs: [],
    displayFavs: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE: 
            if(state.favs.includes(action.payload)){
                return {...state}
            }
            return {
                ...state,
                favs: [...state.favs, action.payload]
            }

        case REMOVE_FAVORITE:
            return {
                ...state,
                favs: state.favs.filter(item=>(action.payload !== item.id))
            }

        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavs: !state.displayFavs
            }

        default:
            return state;

    }
}

export default reducer;