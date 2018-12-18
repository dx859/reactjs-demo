import React, {Component, createContext} from 'react';
import {inputArray} from './TestInputKeys';

export const {Provider, Consumer} = createContext(null, (prev, next) => {
  let result = 0;

  inputArray.forEach((input,i)=>{
    if (prev[input] !== next[input]) {
      
      result |= (i+1);
    }
  })
  console.log(result)
  return result;
})

class TestProvider extends Component {

  constructor(props) {
    super(props);
    let inputs = {};
    inputArray.forEach(input=>{
      inputs[input] = '';
    })
    this.state = {
      ...inputs,
      onChange: this.onChange,
      switchTheme: this.switchTheme,
    }
  }

  onChange = (value, type) => {
    this.setState({[type]: value})
  }

  switchTheme = (theme) => {
    this.setState({theme});
  }

  render() {
    console.log('render', TestProvider.name)
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

export default TestProvider;