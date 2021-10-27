import Review from "../../components/Review"

const gameReducer = (state = { games: [] }, action) => {
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
            const editGame = state.games.find(game => game.id === parseInt(action.review.game_id))

            const editReviewIndex = editGame.reviews.findIndex(review => review.id === action.review.id)

            return {
                games: state.games.map(game => game.id === editGame.id ? {
                    ...editGame, 
                    reviews: [
                        ...editGame.reviews.slice(0, editReviewIndex),
                        action.review, 
                        ...editGame.reviews.slice(editReviewIndex +1)
                    ]

                }: game)
            }
        case "DELETE_REVIEW":
            const deleteGame = state.games.find(game => game.id === action.review.game_id)
           
            return {
                games: state.games.map(game => game.id === deleteGame.id ? {
                    ...deleteGame, 
                    reviews: deleteGame.reviews.filter(review => review.id !== action.review.id)
                } : game)
            }
        case "FILTER_GAMES":
            
            return {
                games: [...state.games.filter(game => game.title.toLowerCase().includes(action.payload.toLowerCase()))]
            }
        default: 
            return state

    }      

}



export default gameReducer
