import React from 'react';
import {Consumer} from "./TestProvider";

const TestShowInput = ({type, ThemeColorChangedBits}) => {

  return (
    <Consumer unstable_observedBits={ThemeColorChangedBits}>
      {
        ({[type]: value}) => {
          console.log('render', TestShowInput.name, type)
          return <p>{value}</p>
        }
      }
    </Consumer>
  );
};

export default TestShowInput;