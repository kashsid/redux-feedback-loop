import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact Path="/" component={Feeling} />
          <Route exact Path="/understanding" component={Understanding} />
          <Route exact Path="/Support" component={Supported} />
          <Route exact Path="/comments" component={Comments} />
          <Route exact Path="/review" component={FeedbackReview} />
          <Route exact Path="admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
