import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import EnglishCards from './views/EnglishCards';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact={ true } path='/englishcards' component={ EnglishCards } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
