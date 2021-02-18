import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import * as DiIcons from "react-icons/di";

export default function MyNavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand to="/">
          <DiIcons.DiCode className="brandIcon"/>
          <span>Alexandre Alves</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="nl-auto">
            <Link className="link" to="/">sobre mim</Link>
            <Link className="link" to="/skills">skills</Link>
            <Link className="link" to="/links">links</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
