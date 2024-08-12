import React, { useEffect, useState } from "react";
import CharacterCard from "../Charactercard/CharacterCard";

function RickAndMortyCharacterCard(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const rickAndMortyCharacterId = props.id;
    fetch(
      `https://rickandmortyapi.com/api/character/${rickAndMortyCharacterId}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
        setImage(data.image);
        setGenre(data.gender);
        setStatus(data.status);
      });
  }, []);

  return (
    <div>
      <CharacterCard name={name} image={image} genre={genre} status={status} />
    </div>
  );
}

export default RickAndMortyCharacterCard;
