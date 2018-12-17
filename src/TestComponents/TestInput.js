import React from 'react';
import {Consumer} from './TestProvider';


const TestInput = ({type, ThemeColorChangedBits}) => {

  return (
    <Consumer unstable_observedBits={ThemeColorChangedBits}>
      {
        ({[type]: value, onChange}) => {
          console.log('render', TestInput.name, type)
          return <input type="text" value={value} onChange={e => onChange(e.target.value, type)}/>
        }
      }
    </Consumer>
  );
};

export default TestInput;