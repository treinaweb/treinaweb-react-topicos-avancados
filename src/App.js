import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import NewProductView from './views/NewProductView';
import ProductListView from './views/ProductListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <header>
                <ul className="link-list" >
                  <li>
                    <Link to={'/'} >Novo</Link>
                  </li>
                  <li>
                    <Link to={'/list'} >Lista</Link>
                  </li>
                </ul>
              </header>
              <div>
                <Route path={'/'} exact component={NewProductView} />
                <Route path={'/list'} component={ProductListView} />
              </div>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
