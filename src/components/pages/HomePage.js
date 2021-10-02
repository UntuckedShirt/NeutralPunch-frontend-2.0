// const HomePage = () => {
//     return (
//         <div>
//         <h1> HomePage</h1>
// </div>
//     )

// }

// export default HomePage

import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Neutral Punch</h1>
        <p className="lead">
          
        </p>
        <hr className="my-4" />
        <Link
          to="/games"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Games
        </Link>
      </div>
    </div>
  </div>
);