import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./container/Home";
import {hot} from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
