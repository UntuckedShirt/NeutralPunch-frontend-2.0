export const fetchGames = () => {
    return dispatch => {
        fetch('http://localhost:3000/games')
            .then(result => result.json())
            .then(games => dispatch({type: "FETCH_GAMES", games: games}))

    }

}