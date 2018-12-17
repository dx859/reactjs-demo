import React, { Component } from 'react';
import TestFragment from "./TestComponents/TestFragment";
import TestProvider from "./TestComponents/TestProvider";


class App extends Component {
  render() {
    return (
      <div className="App">
        <TestProvider>
          <TestFragment/>
        </TestProvider>
      </div>
    );
  }
}

export default App;
