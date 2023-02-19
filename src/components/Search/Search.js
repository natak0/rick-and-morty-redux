import React from "react";
import searchIcon from "./icons/search.svg";
import "./Search.css";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../../slices/search";

const Search = (props) => {
  const query = useSelector((state) => state.search.query);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(search(event.target.value));
  };
  return (
    <div className="search">
      <input
        type="text"
        placeholder={props.placeholder}
        value={query}
        onChange={handleChange}
      />
      <img src={searchIcon} alt="search" className="search__icon" />
    </div>
  );
};

export default Search;
