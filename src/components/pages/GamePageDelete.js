import React from 'react';

// const GamePageDelete = (props) => {
//     return (
//         <div> 
           
//             This is the GameDeletePage
             
//         </div>
//     )
// }

// export default GamePageDelete

class GameDeletePage extends React.Component{
  
    render(){
      return(
        <div>
          <h1>{this.props.GameDeletePage.name}</h1>
          <p>{this.props.GameDeletePage.description}</p>
        </div>
      )      
    }
  }

  export default GameDeletePage