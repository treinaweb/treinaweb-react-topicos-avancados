import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {TransitionGroup, CSSTransition} from 'react-transition-group';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      myList: []
    }

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(){
    this.setState(state => ({
      myList: [...state.myList, {id: Date.now()}]
    }));
  }

  remove(){
    const myList = this.state.myList;
    if(myList.length){
      myList.splice(0, 1);
      this.setState({myList});
    }
  }

  render() {
    const { state } = this;
    return (
      <div>
        <button onClick={this.add} >ADD</button>
        <button onClick={this.remove} >REMOVE</button>
        <TransitionGroup>
          {
            state.myList.map(item => {
              return <CSSTransition key={item.id} timeout={300} classNames={{
                enter: 'entrando',
                exitActive: 'saindo'
              }} >
                <div className={'btn'} >{item.id}</div>
              </CSSTransition>
            })
          }
          
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
