import React, {Component} from 'react';
import TestInput from "./TestInput";
import {inputArray} from './TestInputKeys';



class TestFragment extends Component {
  render() {
    console.log('render',TestFragment.name)
    return (
      <div>
        {
          inputArray.map((input,index)=><TestInput key={input} type={input} inputBit={index+1}/>)
        }
      </div>
    );
  }
}

export default TestFragment;