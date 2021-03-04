import React from "react";
import "./style.css";
import Navbar from "../Navbar";
import About from "../../pages/About";
import Skills from "../../pages/Skills";
import Portfolio from "../../pages/Portfolio";
import Footer from "../Footer";
import Container from "react-bootstrap/Container";
import "./style.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">

      <Router>
        <Container className="p-0" fluid={true}>
          <div className="content">
          <Navbar />
          <div className="pages">
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/skills" component={Skills} />
              <Route path="/portfolio" component={Portfolio} />
            </Switch>
            </div>
          </div>
          <Footer />
        </Container>
      </Router>

    </div>
  );
}
