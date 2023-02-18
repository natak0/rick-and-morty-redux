import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <section>
      <Link to="/">
      </Link>
      <h1>All Rick and Morty characters</h1>
    </section>
  </nav>
);

export default Navbar;
