import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import One from "./1.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/T/1" component={One} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
