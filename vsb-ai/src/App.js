import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from './Common/Navigation'
import Routing from './Routing.jsx';
import './App.css';
import Footer from './Common/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigation />
          <Routing />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
