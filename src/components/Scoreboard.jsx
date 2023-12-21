import "../Scoreboard.css";
import propTypes from "prop-types";

export default function Scoreboard({score, bestScore}) {
  return (
    <div id="scoreboard">
      <h3>Score: {score}</h3>
      <h3>Best Score: {bestScore}</h3>
    </div>
  );
}

Scoreboard.propTypes = {
  score: propTypes.number,
  bestScore: propTypes.number,
};