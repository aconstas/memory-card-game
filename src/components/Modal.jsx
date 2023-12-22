import propTypes from "prop-types";
import "../Modal.css";

export default function Modal({ onClose, score }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <span>
          Aw, jeez, your score is... 
          <h4 id="score">{score}</h4> 
          That's like... you know, pretty good or
          maybe not, I don't know. It's not like it's as high as Rick's IQ or
          anything, but hey, at least you didn't turn yourself into a pickle to
          avoid playing, right? That's a win in my book!
        </span>
        <button id="close-modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: propTypes.func,
  score: propTypes.number,
};
