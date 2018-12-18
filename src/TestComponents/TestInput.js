import React from 'react';
import {Consumer} from './TestProvider';


const TestInput = ({type, inputBit}) => {

  return (
    <Consumer unstable_observedBits={inputBit}>
      {
        ({[type]: value, onChange}) => {
          console.log('render', TestInput.name, type, inputBit)
          return <input type="text" value={value} onChange={e => onChange(e.target.value, type)}/>
        }
      }
    </Consumer>
  );
};

export default TestInput;