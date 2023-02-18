import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <section>
      <Link to="/">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
          alt="rick and morty avatar"
        />
      </Link>
      <h1>Rick and Morty characters</h1>
    </section>
  </nav>
);

export default Navbar;
