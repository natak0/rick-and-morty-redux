import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Created with{" "}
        <a
          className="footer__link"
          href="https://rickandmortyapi.com/documentation/"
        >
          Rick and Morty API
        </a>
      </p>
    </footer>
  );
};

export default Footer;
