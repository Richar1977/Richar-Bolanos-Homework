import React from "react";
import Details from "../details/detailsComponent";
import Image from "../image/imageComponent";
import Title from "../title/titleComponents";

function CharacterCard(props) {
  return (
    <div>
      {/* Nombre de el personaje */}
      <Title title={props.name} />
      {/* Imagen de el personaje */}
      <Image url={props.image} />
      {/* Detalles de el personaje */}
      <Details genre={props.genre} status={props.status} />
    </div>
  );
}

export default CharacterCard;
