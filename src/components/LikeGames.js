import React, { Component } from 'react';

class LikeGames extends Component {

    state = {

        count: 0
        
    }
    incrementMe = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementMe}> Likes: {this.state.count}</button>
            </div>
        )
    }
}

export default LikeGames