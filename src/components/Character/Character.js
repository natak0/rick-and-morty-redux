import React from "react";
import { Link } from "react-router-dom";
import "./Character.css";

export const Character = ({ item, excerpt }) => {
  const character = (
    <article className={`item-detail${!excerpt ? ` item-detail--single` : ""}`}>
      <img src={item.image} alt={`${item.name}`} />
      <div className="item-detail__text-container">
        <h3>{`${item.name}`}</h3>
        <span>{item.gender}</span>
        <span>{item.species}</span>
        {!excerpt && <span>{item.origin.name}</span>}
      </div>
    </article>
  );
  return excerpt ? (
    <Link to={`/characters/${item.id}`} className="button">
      {character}
    </Link>
  ) : (
    character
  );
};
