/* eslint-disable no-use-before-define */
import React from 'react';

// PACKAGES

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// COMPONENTS

// import NavBar from './components/layouts/NavBar/NavBar';
import Main from './components/dashboard/Main';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    // <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
    //   <div className="ml-6 pt-1">
    //     <h1 className="text-2xl text-blue-700 leading-tight">
    //       We will create firebase application
    //     </h1>
    //   </div>
    // </div>
    <BrowserRouter>
      <div className="App">
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/main" component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
