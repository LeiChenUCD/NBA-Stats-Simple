// src/routes.js

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function Routes() {
  return (
    <Router>
      {/* <Switch> */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      {/* </Switch> */}
    </Router>
  );
}

export default Routes;
