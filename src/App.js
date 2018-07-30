import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {hot} from 'react-hot-loader';
import GameBlock from "./container/GameBlock";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={GameBlock}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
