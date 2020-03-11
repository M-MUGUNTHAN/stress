import React from 'react';
import Login from './components/page/Login';
import Home from './components/page/Home';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
