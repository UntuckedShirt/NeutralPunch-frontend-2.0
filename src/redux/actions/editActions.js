export const editReview = (review) => {
    return (dispatch) => {
        dispatch({type: "EDIT_REVIEW", payload: review})
        fetch("http://localhost:3000/reviews", {
            method: "PATCH",
            headers: {
                "content-type": "application/json",

            },
            body: JSON.stringify({
                review: review
            })
        })
        //     .then(res => res.json())
        // .then(review => dispatch({type: "EDIT_REVIEW", review: review}))
    }
}