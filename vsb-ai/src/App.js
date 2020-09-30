import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from './Common/Navigation'
import Routing from './Routing.jsx';
import Footer from './Common/Footer';
import CookieConsent from "react-cookie-consent";


// Cookie text: This website uses cookies to enhance the user experience. By continuing to browse the site, you agree to our use of cookies.
function App() {
  return (
    <div className="App">
      <Router>
          <Navigation />
          <Routing />
          <Footer />
      </Router>
      <CookieConsent debug={false}  buttonText="Okay">This website uses cookies to enhance the user experience. By continuing to browse the site, you agree to our use of cookies.</CookieConsent>
    </div>

  );
}

export default App;
