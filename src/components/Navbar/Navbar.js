import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./Navbar.css";

const Navbar = () => {
  const random = Math.floor(Math.random() * 826); // the total character count
  return (
    <nav className="navbar">
      <section>
        <Link to="/">
          <img
            src={`https://rickandmortyapi.com/api/character/avatar/${
              random === 0 ? 1 : random
            }.jpeg`}
            alt="Rick and Morty avatar"
          />
        </Link>
        <Link to="/">
          <h1>Rick and Morty Characters</h1>
        </Link>
        <Search placeholder="Search" />
      </section>
    </nav>
  );
};

export default Navbar;
