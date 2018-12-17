import React, {Component} from 'react';
import TestInput from "./TestInput";
import TestShowInput from "./TestShowInput";
import {ThemeColorChangedBits, ThemeCountChangedBits} from "./TestProvider";

class TestFragment extends Component {
  render() {
    console.log('render',TestFragment.name)
    return (
      <>
        <TestInput type="input" ThemeColorChangedBits={ThemeColorChangedBits}/>
        <TestInput type="theme" ThemeColorChangedBits={ThemeCountChangedBits}/>
        <TestShowInput type="input" ThemeColorChangedBits={ThemeColorChangedBits}/>
        <TestShowInput type="theme" ThemeColorChangedBits={ThemeCountChangedBits}/>
      </>
    );
  }
}

export default TestFragment;