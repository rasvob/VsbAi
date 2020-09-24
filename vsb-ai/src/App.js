import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import Navigation from './Common/Navigation'
import Routing from './Routing.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigation />
          <Routing />
        </div>
      </Router>
    </div>
  );
}

export default App;
