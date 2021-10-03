import React from 'react';
import { submit } from 'redux-form';
import { createReview } from '../redux/actions/reviewActions';
import { connect } from 'react-redux';


class NewReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            game_id: this.props.gameId
        }
    }
    render() {
        const onChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        const submitForm = (e) => {
            e.preventDefault()
            this.props.createReview(this.state)
        }
        return (
            <form onSubmit={submitForm}>
                <label for="title">title</label>
                <input type="text" name="title" onChange={ onChange}/>
                <label for="description">description</label>
                <input type="text" name="description" onChange={onChange}/>
                <input type="submit" value="create review" />
            </form>
        )
    }
}

// const editForm = ({ handleEdit, review }) => {
//     return (
//         <div>
//             {review.description} - {review.title} 
//             <br/>
//             <button onClick={() => handleEdit(review)}> Edit </button>
//             {/* <button onClick={() => deleteStudent(review)}>Delete</button> */}
//         </div>
//     );
// };

const mapDispatchToProps = (dispatch) => {
    return {
        createReview: (review) => dispatch(createReview(review))
    }
}

export default connect(null, mapDispatchToProps)(NewReviewForm)