import React, { Component, Fragment } from 'react';
import FadeIn from 'react-fade-in';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.scss';
import Header from './components/Header';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

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
