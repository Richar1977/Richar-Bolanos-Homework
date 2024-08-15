import React, { useEffect, useState } from "react";
import CharacterCard from "./components/Charactercard/CharacterCard";
import "./App.css";
function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharactersList(data.results);
        setInfo(data.info);
      });
  }, [currentPage]);

  const handleNextPage = () => {
    if (info.next) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (info.prev) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <div>
        <div className="character-grid">
          {charactersList.map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
              genre={character.gender}
              status={character.status}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="pagination">
          <button onClick={handlePreviousPage}>Anterior</button>
          <span>
            Página {currentPage} de {info.pages}
          </span>
          <button onClick={handleNextPage}>Siguiente</button>
        </div>
      </div>
    </div>
  );
}

export default App;
