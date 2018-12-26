import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
            <nav>
              <ul>
                <li>
                  <Link to="/" >Home</Link>
                </li>
                <li>
                  <Link to="/about/" >About</Link>
                </li>
              </ul>
            </nav>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
