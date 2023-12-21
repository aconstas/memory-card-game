import "./App.css";
import "./Card.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  console.log(selectedCharacters);

  function handleCardClick(character) {
    setSelectedCharacters([...selectedCharacters, character.name]);
    if (isCardAlreadyClicked(character)) {
      updateBestScore();
      return alert("You lost!");
    } else {
      shuffleCards();
    }
  }

  function isCardAlreadyClicked(character) {
    return selectedCharacters.includes(character.name);
  }

  function shuffleCards() {
    let shuffledCharacters = [...characters];

    for (let i = shuffledCharacters.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledCharacters[i], shuffledCharacters[randomIndex]] = [
        shuffledCharacters[randomIndex],
        shuffledCharacters[i],
      ];
    }
    setCharacters(shuffledCharacters);
  }

  function updateBestScore() {
    if (selectedCharacters.length > bestScore) {
      setBestScore(selectedCharacters.length);
    }
  }

  return (
    <>
      <h1>MEMORY GAME</h1>
      <Scoreboard score={selectedCharacters.length} bestScore={bestScore} />
      <div className="cards-container">
        {characters.map((character) => (
          <Card
            key={character.id}
            character={character}
            handleCardClick={() => handleCardClick(character)}
          />
        ))}
      </div>
    </>
  );
}
