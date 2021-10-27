export const searchgame = (userinput) => {
    return dispatch => {
        dispatch({type:"FILTER_GAMES", payload: userinput})
    }
}