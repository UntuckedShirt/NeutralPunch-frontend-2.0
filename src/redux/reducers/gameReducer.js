import Review from "../../components/Review"

const gameReducer = (state = {games: []}, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {
                games: action.games
            }
        case "CREATE_REVIEW":
            const updateGame = state.games.find(game => game.id === action.review.game_id)
            updateGame.reviews = [...updateGame.reviews, action.review]
            return {
                games: state.games.map(game => game.id === updateGame.id ? updateGame : game)
            }
        default: 
            return state

    }

}

export default gameReducer