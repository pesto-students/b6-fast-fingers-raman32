import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './utils/constants'
import './App.css';
import Entry from '../src/pages/Entry'
import Game from '../src/pages/Game'
import Login from './pages/Login';
const UserContext = createContext();
function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={{user ,setUser}}>
      <Router>
        <Switch>
        <Route exact path={routes.login} >
            <Login/>
          </Route>
          <Route exact path={routes.entry} >
            <Entry />
          </Route>
          <Route path={`${routes.game}/:initialDifficulty`}>
            <Game />
          </Route>
          <Route  >
            <div className="NotFound">404 not found</div>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
export {UserContext};
