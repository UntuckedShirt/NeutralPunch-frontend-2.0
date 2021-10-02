import React from 'react';
import { Link } from 'react-router-dom';
import { fetchGames } from "../../redux/actions/gameActions"
import { connect } from "react-redux";


class GamePage extends React.Component {

  componentDidMount() {
    this.props.fetchGames()
  }
    
    render() {
    const { games } = this.props;
    const allGames = games.map((game, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={game.image_url}
            className="card-img-top"
            alt={`${game.title} image`}
          />
          <div className="card-body">
            
             <Link to={`/games/${game.id}`} className="btn custom-button">
              {game.title}
             </Link>
           </div>
         </div>
       </div>
    ));
    const noGame = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
         <Link to="/games">create game</Link>
        </h4>
      </div>
    );

     return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">//</h1>
            <p className="lead text-muted">
             Welcome to the NP Game Reviews!!
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/games" className="btn custom-button">
                Create New Game
              </Link>
            </div>
            <div className="row">
              {games.length > 0 ? allGames : noGame}
            </div>

          </main>
        </div>
      </>
    );
  }

    
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGames: () => dispatch(fetchGames())
    }
}



export default connect (mapStateToProps, mapDispatchToProps)(GamePage)