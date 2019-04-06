import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Comments from "../Comments/Comments";
import Support from "../Support/Support";
import FeedbackReview from "../FeedbackReview/FeedbackReview";
import Admin from "../Admin/Admin";
import Header from "../Header/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact Path="/" component={Feeling} />
          <Route exact Path="/understanding" component={Understanding} />
          <Route exact Path="/Support" component={Support} />
          <Route exact Path="/comments" component={Comments} />
          <Route exact Path="/review" component={FeedbackReview} />
          <Route exact Path="admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
