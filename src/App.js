import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './screens/home/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
