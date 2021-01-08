/* eslint-disable no-use-before-define */
import React from 'react';

// PACKAGES

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

// COMPONENTS

// import NavBar from './components/layouts/NavBar/NavBar';
import Main from './components/dashboard/Main';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NavBar from './components/layouts/NavBar/NavBar';

function App() {
  const loggedIn = useSelector((state: any) => state.auth.loggedIn);
  return (
    <BrowserRouter>
      <div className="App">
        {
          loggedIn ? <NavBar />
            : (
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/main" component={Main} />
              </Switch>
            )
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
