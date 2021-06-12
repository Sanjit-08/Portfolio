import React from 'react';
import './App.css';
import history from './history';
import { Router,Route,Switch } from 'react-router-dom';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  document.addEventListener("contextmenu", function(evt){
    evt.preventDefault();
  }, false);

  document.addEventListener("copy", function(evt){
    evt.clipboardData.setData("text/plain", "Copying is not allowed on this webpage");
    evt.preventDefault();
  }, false);

  
  return (
  <Router history={history}>
    <div>
       <Navigation />
      <Switch>
       <Route path="/" exact component={Intro} />
       <Route path="/about" component={About} />
       <Route path="/portfolio" component={Portfolio} />
       <Route path="/contact" component={Contact} />
      </Switch> 
    </div>
  </Router>
  );
}

export default App;
