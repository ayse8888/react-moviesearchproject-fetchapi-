export default (state, action) => {
    switch(action.type){
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }

        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return{
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
            }    
        default:
            return state
    }
}

// as we get more actions, actions are objects the reducers how to change, return the state