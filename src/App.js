import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './components/pages/HomePage';
import GamePage from './components/pages/GamePage';
import GamePageCreate from './components/pages/GamePageCreate';
import GamePageEdit from './components/pages/GamePageEdit';
import AboutUsPage from './components/pages/AboutUsPage';
import Header from './components/Header';
import Game from './components/Game';



// import Game from './components/game/Game';
// import Games from './components/games/Games';


 
const App = () => {
  return (
    <div>
      <div className="ui container">
        <Header />
      <Router>
        <Menu />
        <Switch>
            <Route path="/" exact component={() => <HomePage />} />
            <Route path="/games" exact component={GamePage} />
            <Route path="/games/edit" exact component={GamePageEdit} />
            <Route path="/aboutus" exact component={AboutUsPage} />
            <Route path="/games/:id" exact component={Game} />
            <Route path="/games" exact component={GamePageCreate} />

          {/* <Route path="/games/Games" component={Game} />
          <Route path="/game/Game" component={Game} /> */}

          </Switch>
          
      </Router>
      </div>
    </div>
  );
}

export default App;
