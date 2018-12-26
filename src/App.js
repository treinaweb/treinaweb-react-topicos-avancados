import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CSSTransition from 'react-transition-group/CSSTransition';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isOn: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(({isOn}) => {
      return {
        isOn: !isOn
      }
    })
  }

  render() {
    const { state } = this;
    return (
      <div>
        <CSSTransition in={state.isOn} timeout={{
          enter: 300,
          exit: 500
        }} classNames={{
          enter: 'entrando',
          exitDone: 'saindo'
        }} >
          <button onClick={this.handleClick} className={'btn'} >CLICK</button>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
