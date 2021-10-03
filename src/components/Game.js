import React from 'react';
import { Link } from "react-router-dom";
import Review from './Review';
import { connect } from 'react-redux';
import { fetchGames } from '../redux/actions/gameActions';
import NewReviewForm from './NewReviewForm';
import EditReviewForm from './EditReviewForm';

class Game extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            game: { reviews: [] },
            showReviewForm: false
        }
    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    }
    componentDidMount() {
        // const {
        //     match: {
        //         params: { id }
        //     }
        // } = this.props
        // this.setState({
        //     game: this.props.games.find(game => game.id === parseInt(id)) 
        // })
        
    }
    addHtmlEntities(str) {
        return String(str)
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
    }
    render() {
        const id = window.location.pathname.split('/')[2]

        const game = this.props.games.find(game => game.id === parseInt(id)) 
        let reviewList = "No reviews available";
    
        // if (game.reviews.length > 0) {
        //   reviewList = game.reviews
        //     .split(",")
        //     .map((review, index) => (
        //       <li key={index} className="list-group-item">
        //         {review}
        //       </li>
        //     ));
        // }
        
    
        return (
          <div className="">
            <div className="hero position-relative align-items-center justify-content-center">
              <img
                src={game.image_url}
                alt={`${game.title} image`}
                className="img-fluid"
              />
              <div className="overlay bg-dark" />
              <h1 className="display-4 position-relative">
                {game.title}
              </h1>
            </div>
                <div className="container py-5">
                    <button onClick={() => this.setState({
                        showReviewForm: !this.state.showReviewForm
                    })}> Write review </button>
                    <br />
                    <br />
              {this.state.showReviewForm && <NewReviewForm gameId={game.id} />}
              <div className="container py-5">
                    <button onClick={() => this.setState({
                        showEditForm: !this.state.showEditForm
                    })}>Edit Review</button>
                    <br />
                    <br />
                    {this.state.showReviewForm && <EditReviewForm gameId={ game.id}/>}
              
              <div className="row">
                
                    <h5 className="mb-2">Reviews</h5>
                        {game.reviews.map((review, index) => <Review review={review}/>)} 
                  
                <div className="col-sm-12 col-lg-2">
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                  
                </div>
              </div>
              </div>
            </div>
          </div>
        );
      }
    
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}


export default connect(mapStateToProps, null)(Game);