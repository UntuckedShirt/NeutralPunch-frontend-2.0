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
        case "EDIT_REVIEW":
            const editGame = state.games.find(game => game.id === action.review.game_id)
            editGame.reviews = [...editGame.reviews, action.review]
            return {
                games: state.games.map(game => game.id === editGame.id ? editGame : game)
            }
        case "DELETE_REVIEW":
            const deleteGame = state.games.find(game => game.id === action.review.game_id)
            deleteGame.reviews = [...deleteGame.reviews, action.review]
            return {
                games: state.games.map(game => game.id === deleteGame.id ? deleteGame : game)
            }
        default: 
            return state

    }

}

export default gameReducer