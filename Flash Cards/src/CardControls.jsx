import React from 'react';
import './CardControls.css'

const CardControls = ({ onPrev, onFlip, onNext }) => {

  return (
    <div className="card-controls">
      <button onClick={onPrev} className="control-button">
        ◀ Previous
      </button>
      <button onClick={onFlip} className="control-button flip">
        Show Answer
      </button>
      <button onClick={onNext} className="control-button">
        Next ▶
      </button>
    </div>
  );
};

export default CardControls;
