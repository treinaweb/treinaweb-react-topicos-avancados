// @flow

import React, { Component } from 'react';
import './App.css';

type Props = {
  name?: string,
  age: number,
  isActive: boolean,
  nameList: Array<string>
}

type State = {
  counter: number
}


class App extends Component <Props, State> {

  constructor(props: Props){
    super(props);
    this.state = {
      counter: 0
    }

  }

  render() {
    const { state } = this;
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    );
  }
}

export default App;
