import React, { useState } from "react";
import { useEffect } from "react";


const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>
        <strong>Species:</strong> {character.species}
      </p>
      <p>
        <strong>Status:</strong> {character.status}
      </p>
      <p>
        <strong>Type:</strong> {character.type}
      </p>
      <p>
        <strong>Origin:</strong> {character.origin.name}
      </p>
    </div>
  );
};

const RickAndMortyApp = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacters(data.results);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <input
        type="text"
        placeholder="Search for a character..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      
      <div className="character-grid">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default RickAndMortyApp;
