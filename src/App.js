import React, { Component } from 'react';
import './App.css';

import ClickCounter from './components/ClickCounter';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    }

  }

  render() {
    const { state } = this;
    return (
      <div>
        <h1>Hello!</h1>
        <ClickCounter />
      </div>
    );
  }
}

export default App;
