import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Projects from 'pages/Projects/Projects';
import Skills from 'pages/Skills/Skills';
import Contact from 'pages/Contact/Contact';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </HashRouter>
  );
}

export default App;
