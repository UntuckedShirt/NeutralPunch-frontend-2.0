export const searchgame = (userinput) => {
    return dispatch => {
        dispatch({type:"FILTER_GAME", payload: userinput})
    }
}