export const editReview = (review) => {
    return (dispatch) => {
        dispatch({type: "EDIT_REVIEW", review: review})
        fetch(`http://localhost:3000/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                review: review
            })
        })
        //     .then(res => res.json())
        // .then(review => dispatch({type: "EDIT_REVIEW", review: review}))
    }
}