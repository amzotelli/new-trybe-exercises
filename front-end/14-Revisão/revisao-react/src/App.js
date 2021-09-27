import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Details from './pages/Details';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route path="/details/:id" component={ Details } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

