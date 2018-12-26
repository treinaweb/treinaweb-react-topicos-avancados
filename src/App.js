import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Transition from 'react-transition-group/Transition';

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
    // entering
    // entered
    // exiting
    // exited
  }

  render() {
    const { state } = this;
    return (
      <div>
        <Transition in={state.isOn} mountOnEnter={true} appear={true} timeout={{
          enter: 300,
          exit: 500
        }}>
          {
            (status) => {
              return <button onClick={this.handleClick} className={'btn ' + status} >CLICK</button>
            }
          }
        </Transition>
      </div>
    );
  }
}

export default App;
