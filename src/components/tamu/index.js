import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './tamu.css';
import One from "./1.js";
import Space from "./space.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/T/1" component={One} />
            <Route path="/T/space" component={Space} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
