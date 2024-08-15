import React from "react";
import { Link, NavLink } from "react-router-dom";
function HomePage() {
  return (
    <div className="homepage-container">
      <header className="header">
        <h1> Bienvenido a la pagina de rick and morty</h1>
        <img  src="https://rickandmortyapi.com/api/character/avatar/459.jpeg" alt="" />
      </header>
      <main className="main-content">
        <NavLink to="https://rickandmortyapi.com/"> The Rick and Morty API </NavLink>
      </main>
      <footer className="footer">
        <NavLink>
          <ul>
            <li>
              <Link to="/characters"> Ir a personajes</Link>
            </li>
            <br />
            <li>
              <Link to="/episodes">Ir a episodios</Link>
            </li>
          </ul>
        </NavLink>
      </footer>
    </div>
  );
}

export default HomePage;
