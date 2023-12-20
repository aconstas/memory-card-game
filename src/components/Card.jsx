import propTypes from "prop-types";
import "../Card.css";

export default function Card({ character }) {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
    </div>
  );
}

Card.propTypes = {
  character: propTypes.object,
};

// Will the card images ever change? No.
// Do the card images depend on some user interaction? No.
// Does anything happen with the card images? They get shuffled on user click.
