import React from 'react';
import { Link } from 'react-router-dom';



class Review extends React.Component {
    constructor(props) {
        super(props)
        this.state = { likes: this.props.review.likes }
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
        const {review} = this.props
        return (
            <div className="col-sm-12 col-lg-3">
            <ul className="list-group"><li className="list-group-item">
                  {review.description}
                      </li>
                  </ul>
                <p>{this.state.likes} <button onClick={addLike}> Like me</button> </p>
                <br></br>
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

    }
    
    
} 






export default Review