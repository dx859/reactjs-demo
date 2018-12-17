import React, {Component, createContext} from 'react';

export const ThemeColorChangedBits = 0b10;
export const ThemeCountChangedBits = 0b01;

export const {Provider, Consumer} = createContext(null, (prev, next) => {
  let result = 0;
  if (prev.input !== next.input) {
    result |= ThemeColorChangedBits;
  }
  if (prev.theme !== next.theme) {
    result |= ThemeCountChangedBits;
  }

  return result;
})

class TestProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'red',
      input: '',
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