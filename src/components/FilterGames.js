import React, {Component } from 'react'
import { searchgame } from '../redux/actions/filterActions'
import { connect } from 'react-redux'

class FilterGames extends Component {


handlechange = (e) => {
    this.props.searchgame(e.target.value)
}

    render() {
        return (
   
            <div className="GamePage">
                <input type="text" placeholder="Search..." onChange=
                    {this.handlechange} />
            </div>
        )
    }
    }

const mapDispatchToProps = (dispatch) => {
    return {
        searchgame: (userinput) => dispatch(searchgame(userinput))
    }
}

export default connect(null, mapDispatchToProps)(FilterGames)