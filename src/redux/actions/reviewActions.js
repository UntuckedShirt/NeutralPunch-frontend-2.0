export const createReview = (review) => {
    return (dispatch) => {
        fetch("http://localhost:3000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                review: review
            })
        })
            .then(res => res.json())
        .then(review => dispatch({type: "CREATE_REVIEW", review: review}))
    }
}