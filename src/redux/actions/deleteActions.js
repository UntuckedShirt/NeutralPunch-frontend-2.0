export const deleteReview = (review) => {
    return (dispatch) => {
        dispatch({type: "DELETE_REVIEW", review: review})
        fetch(`http://localhost:3000/reviews/${review.id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            
        })
        //     .then(res => res.json())
        // .then(review => dispatch({type: "EDIT_REVIEW", review: review}))
    }
}