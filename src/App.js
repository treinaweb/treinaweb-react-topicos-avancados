import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';

import Index from './views/index';
import About from './views/about';

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
        <Router>
          <div>
            <Prompt when={false} message={(location) => `Tem certeza que deseja ir para ${location.pathname}?`} />
            <nav>
              <ul>
                <li>
                  <Link to="/about/abc" >Home</Link>
                </li>
                <li>
                  <Link to="/about/def" >About</Link>
                </li>
              </ul>
            </nav>
            <Route path="/" exact component={Index} />
            <Route path="/about/:minhaVariavel(abc|def)" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
