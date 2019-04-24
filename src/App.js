import React, { Component, Fragment } from 'react';
import FadeIn from 'react-fade-in';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.scss';
import Header from './Header';
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header />
          <FadingRoute exact path="/" component={Home}/>
          <FadingRoute path="/work" component={Work}/>
          <FadingRoute path="/about" component={About}/>
          <FadingRoute path="/contact" component={Contact}/>
        </Router>
      </Fragment>
    );
  }
}

const FadingRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <FadeIn>
      <Component {...props}/>
    </FadeIn>
  )}/>
);

export default App;
