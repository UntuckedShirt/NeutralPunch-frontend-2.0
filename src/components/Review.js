import React from 'react';
import { Link } from 'react-router-dom';
import EditReviewForm from './EditReviewForm';
import game from './Game';
import { deleteReview } from '../redux/actions/deleteActions';
import { connect } from 'react-redux';



class Review extends React.Component {
    constructor(props) {
        super(props)
        this.state = { likes: this.props.review.likes }
        // this.editReview = this.editReview(this)
        // this.deleteReview = this.deleteReview(this)
    }
    render() {
        const addLike = () => {
            const likes = this.state.likes +1
            this.setState({
                likes: likes
            })
            fetch(`http://localhost:3000/reviews/${this.props.review.id}`, {
                method: "PATCH", 
                headers: {
                    "content-type": "application/json",
                    accept: "application/json"
                },
                body: JSON.stringify({
                    review: {
                        likes: likes
                    }
                })
            })
        }
        const { review } = this.props
        const hideEditForm = () => {
            this.setState({
                showEditForm: false
            })
        }
        return (
            <div className="col-sm-12 col-lg-3">
                <div className="container py-5">
                   
                    
                    <ul className="list-group">
                        <li className="list-group-item">

                        <button onClick={() => this.setState({
                        showEditForm: !this.state.showEditForm
                    })}>Edit Review</button>
                    <br />
                            <br />
                            
                            <button onClick={()=> this.props.deleteReview(review)}>Delete button</button> 
                            <br />
                            <br />
                                
                            {this.state.showEditForm && <EditReviewForm review={review}
                                hideEditForm={ hideEditForm }/>}
                            {review.description}
                        </li>
                    </ul>
                <p>{this.state.likes} <button onClick={addLike}> Like me</button> </p>
                <br></br>
                </div> 
                </div>
        )
        const editForm = ({ handleEdit, review }) => {
            return (
                <div>
                    
                    {review.description} - {review.title} 
                    <br/>
                    <button onClick={() => handleEdit(review)}> Edit </button>
                    {/* <button onClick={() => deleteStudent(review)}>Delete</button> */}
                </div>
            );
        };

        const editReview = (this.props.editReview)  
            return (
                <div>
                {review.description} - {review.title} 
                <br/>
                <button onClick={() => this.props(review)}> Delete </button>
                </div>
        )
        

    }

  
    
    
} 



const mapDispatchToProps = (dispatch) => {
    return {
        deleteReview: review => dispatch(deleteReview(review))
    }
}


export default connect(null, mapDispatchToProps)(Review)