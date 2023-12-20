import "./App.css";
import "./Card.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="cards-container">
      {characters.map(character => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}