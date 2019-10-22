import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shoppingCart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
