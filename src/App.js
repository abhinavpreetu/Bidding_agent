import React, { Component } from 'react';
import './styles/style.scss';
import Topbar from './containers/topbar/topbar'
import Home from './containers/home/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Home />
      </div>
    );
  }
}

export default App;
