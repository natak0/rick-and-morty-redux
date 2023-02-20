import React from "react";
import { Link } from "react-router-dom";
import "./Character.css";

export const Character = ({ item, excerpt }) => {
  const character = (
    <article className={`item-detail${!excerpt ? ` item-detail--single` : ""}`}>
      <img src={item.image} alt={`${item.name}`} />
      <div className="item-detail__text-container">
        <h2>{item.name}</h2>
        {!excerpt && (
          <>
            <span>{`Gender: ${item.gender}`}</span>
            <span>{`Species: ${item.species}`}</span>
            <span>{`Origin: ${item.origin.name}`}</span>
            <span>{`Location: ${item.location.name}`}</span>
            <span>{`Status: ${item.status}`}</span>
            {item.type && <span>{`Type: ${item.type}`}</span>}
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
