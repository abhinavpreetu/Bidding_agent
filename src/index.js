import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Signup from './containers/signup/signup';

const notFound = () => (
  <div>not found</div>
)

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
        <Route component={notFound}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
