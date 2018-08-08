import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Valida from './Valida';
import logo from './logo.svg';
import './App.css';


const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const ComponentWithRegex = ({ match }) => (
  <div>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/:id" component={Valida} />
      </div>
      </Router>
    );
  }
}

export default App;
