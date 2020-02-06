import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import Portfolio from './Pages/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
