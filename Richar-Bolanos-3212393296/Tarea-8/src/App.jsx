import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CharacterPage from "./CharacterPage";
import EpisodesPage from "./EpisodesPage";
import NotFoundPage from "./NotFoundPage";
import "./App.css";

function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





