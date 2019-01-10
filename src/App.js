import React, { Component } from 'react';
import './App.css';

import NewProductView from './views/NewProductView';
import ProductListView from './views/ProductListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewProductView />
        <ProductListView />
      </div>
    );
  }
}

export default App;
