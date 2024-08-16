import React from "react";

function CharacterCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <p>Género: {props.genre}</p>
      <p>Estado: {props.status}</p>
    </div>
  );
}

export default CharacterCard;
