import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { editReview } from '../redux/actions/editActions';
import { Link } from 'react-router-dom';

class EditReviewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            game_id: this.props.gameId
        }
    }

    componentDidMount() {
        // this.findReview()
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editReview = () => {
        const { game, gameId } = this.props
        const review = review.find(review => review.id === gameId)
        this.setState({
            title: "review.title",
            description: "review.description",
            game_id: this.props.gameId
        })
        
        
    }
    
    
    render() {
        const onChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        const submitForm = (e) => {
            e.preventDefault()
            this.props.editReview(this.state)
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
    

    


//     render() {
       
//         const submitForm = (e) => {
//             e.preventDefault()
//             this.props.editReview(this.state)
//         }
//     }
// }



const mapDispatchToProps = (dispatch) => {
    return {
        editReview: (review) => dispatch(editReview(review))
    }
}

export default connect(null, mapDispatchToProps)(EditReviewForm)