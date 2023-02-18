import React from "react";
import { Link } from "react-router-dom";
import "./Character.css";

export const Character = ({ item, excerpt }) => {
  const character = (
    <article className={`item-detail${!excerpt ? ` item-detail--single` : ""}`}>
      <img src={item.image} alt={`${item.name}`} />
      <div className="item-detail__text-container">
        <h3>{item.name}</h3>
        <span>{`Gender: ${item.gender}`}</span>
        <span>{`Species: ${item.species}`}</span>
        {!excerpt && (
          <>
            <span>{`Origin: ${item.origin.name}`}</span>
            <span>{`Location: ${item.location.name}`}</span>
            <span>{`Status: ${item.status}`}</span>
            <span>{`Type: ${item.type}`}</span>
          </>
        )}
      </div>
    </article>
  );
  return excerpt ? (
    <Link to={`/characters/${item.id}`} className="button">
      {character}
    </Link>
  ) : (
    item && character
  );
};
