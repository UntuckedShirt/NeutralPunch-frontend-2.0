import React from 'react';
import { Link } from 'react-router-dom';

class GameCreatePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            publisher: "",
            publish_date: "",
            console: "",
            players: "",
            image_url: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onChange = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this)
    }
    stripHtmlEntities(str) {
        return String(str)
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }
    onSubmit(event) {
        event.preventDefault();
        const url = "http://localhost:3000/games";
        const { title, publisher, publish_date, console, players, image_url } = this.state;

        if (title.length == 0 || publisher.length == 0 || publish_date.length == 0 || console.length == 0 || players.length == 0 || image_url)
            return;
        
    const body = {
            title,
            publisher,
            publish_date,
            console,
            players,
            image_url
        };

    const token = document.querySelector('meta[name="csrf-token"]').    content;
            fetch(url, {
            method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/game/${response.id}`))
      .catch(error => console.log(error.message));
    }
  
    render() {
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                  
                </h1>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="gameTitle">Game Title</label>
                    <input
                      type="text"
                      title="title"
                      id="game"
                      className="form-control"
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="GamePages">Games</label>
                    <input
                      type="text"
                      name="descriptions"
                      id="Game"
                      className="form-control"
                      required
                      onChange={this.onChange}
                    />
                    <small id="" className="form-text text-muted">
                      
                    </small>
                  </div>
                  <label htmlFor="description"></label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="instruction"
                    rows="5"
                    required
                    onChange={this.onChange}
                  />
                  <button type="submit" className="btn custom-button mt-3">
                    Create Game
                  </button>
                  <Link to="/games" className="btn btn-link mt-3">
                    Back to GamePage
                  </Link>
                </form>
              </div>
            </div>
          </div>
        );
      }
}

export default GameCreatePage