import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Header from './includes/Header';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Category from './pages/Category';
import Details from './pages/Details';


class App extends Component {
  render() {
    return (<Router>
      <div>
        <Route path="/:city" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/:city" component={Home} />
        <Route exact path="/:city/:category" component={Category} />
        <Route exact path="/:city/:category/:listing" component={Listings} />
        <Route exact path="/:city/:category/:listing/:item" component={Details} />
      </div>
    </Router>);
  }
}
export default App;
