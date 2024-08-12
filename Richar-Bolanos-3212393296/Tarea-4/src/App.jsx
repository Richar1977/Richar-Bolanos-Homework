import React from "react";

import "./App.css";
import RickAndMortyCharacterCard from "./components/rickAndMortyCharacterCard/RickAndMortyCharacterCard";

function App() {
  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <div className="character-grid">
        <RickAndMortyCharacterCard id={1} />
        <RickAndMortyCharacterCard id={2} />
        <RickAndMortyCharacterCard id={3} />
        <RickAndMortyCharacterCard id={10} />
      </div>
    </div>
  );
}

export default App;
