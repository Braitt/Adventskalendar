import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Tamu from "./components/tamu/index.js";
import Rowgi from "./components/rowgi/index.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/T" component={Tamu} />
            <Route path="/R" component={Rowgi} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
