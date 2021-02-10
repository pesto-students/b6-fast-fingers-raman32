import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './utils/constants'
import './App.css';
import Entry from '../src/pages/Entry'
import Game from '../src/pages/Game'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={routes.entry} >
            <Entry />
          </Route>
          <Route path={`${routes.game}/:playerName/:initialDifficulty`}>
            <Game />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
