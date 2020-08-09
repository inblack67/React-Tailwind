import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BitcoinState from './context/bitcoin/BitcoinState'
import Home from './components/Home';


import './App.css';

function App() {

  return (
    <BitcoinState>
      <div className="bg-red-500">
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    </BitcoinState>
  );
}

export default App;
