// import React from 'react';
// import { submit } from 'redux-form';

// import { connect } from 'react-redux';


// class GamePageEdit extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: "",
//             description: "",
//             game_id: this.props.gameId
//         }
//     }
//     render() {
//         const onChange = (e) => {
//             this.setState({
//                 [e.target.name]: e.target.value
//             })
//         }
//         const submitForm = (e) => {
//             e.preventDefault()
//             this.props.editReview(this.state)
//         }
//         return (
//             <form onSubmit={submitForm}>
//                 <label for="title">title</label>
//                 <input type="text" name="title" onChange={ onChange}/>
//                 <label for="description">description</label>
//                 <input type="text" name="description" onChange={onChange}/>
//                 <input type="submit" value="create review" />
//             </form>
//         )
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         editReview: (review) => dispatch(editReview(review))
//     }
// }

// export default connect(null, mapDispatchToProps)(GamePageEdit)