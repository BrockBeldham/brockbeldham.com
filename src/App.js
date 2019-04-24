import React, { Component, Fragment } from 'react';
import FadeIn from 'react-fade-in';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.scss';
import Header from './Header';
import Home from './Home';
import Work from './Work';
import About from './About';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header />
          <FadingRoute exact path="/" component={Home}/>
          <FadingRoute path="/work" component={Work}/>
          <FadingRoute path="/about" component={About}/>
          <FadingRoute path="/contact" component={Topics}/>
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
)

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default App;
