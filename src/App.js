import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import NewLanding from "./pages/NewLanding";
import Sidebar from "./components/Sidebar";
import Hiddenbox from "./components/Hiddenspace";
import Row from 'react-bootstrap/Row';


function App() {
  return (
    <Router>
    <React.Fragment>
      <Route component={Sidebar} />
      <Switch>
      <Route exact path="/" component={NewLanding} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/Skills" component={Skills} />
      <Route exact path="/Contact" component={Contact} />
      </Switch>
      </React.Fragment>
  </Router>
  );
}

export default App;
