import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { editReview } from '../redux/actions/editActions';
import { Link } from 'react-router-dom';

class EditReviewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.review.title,
            description: this.props.review.description,
            game_id: this.props.review.game_id,
            id: this.props.review.id
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

    // editReview = () => {
    //     const { game, gameId } = this.props
    //     const review = review.find(review => review.id === gameId)
    //     this.setState({
    //         title: "review.title",
    //         description: "review.description",
    //         game_id: this.props.gameId
    //     })
        
        
    // }

    // handleEdit = id => {
    //     const filteredGames = this.state.games.filter(game =>
    //         game.id !== id);
    //     const selectedGame = this.games.state.find(game =>
    //         game.id === id)
    //     this.setState({
    //         games: filteredGames = id,
    //         items: selectedGame.game_id,
    //         id: id,
    //         editGame: true
    //     });

    // };
    
    
    render() {
        const onChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        const submitForm = (e) => {
            e.preventDefault()
            this.props.editReview(this.state)
            this.props.hideEditForm()
        }
        return (
            <form onSubmit={submitForm}>
                <label for="title">title</label>
                <input type="text" name="title" onChange={onChange} value={this.state.title }/>
                <label for="description">description</label>
                <textarea name="description" rows="4" cols="30" onChange={onChange}>{this.state.description}</textarea>
                <input type="submit" value="Update review" />
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