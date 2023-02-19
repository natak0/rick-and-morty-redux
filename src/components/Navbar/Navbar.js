import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section>
        <Link to="/">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
            alt="rick and morty avatar"
          />
        </Link>
        <h1>Rick and Morty characters</h1>
        <Search placeholder="Search" />
      </section>
    </nav>
  );
};

export default Navbar;
