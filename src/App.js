import React, { Component, Fragment } from 'react';
import FadeIn from 'react-fade-in';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.scss';
import Header from './Header';
import Home from './Home';
import Work from './Work';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header />

          {/* <Route path='/' component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Topics} /> */}
          <FadingRoute exact path="/" component={Home}/>
          <FadingRoute path="/work" component={Work}/>
          <FadingRoute path="/about" component={About}/>
          <FadingRoute path="/contact" component={Topics}/>
        </Router>
        {/* <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn React
            </a>
          </header>
        </div> */}
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

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

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
