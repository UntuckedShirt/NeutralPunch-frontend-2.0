const gameReducer = (state = {games: []}, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {
                games: action.games
            }
        default: 
            return state

    }

}

export default gameReducer