import React from 'react';
import './CardContent.css'

const CardContent = ({ cardData, isFlipped }) => {
  const { question, answer } = cardData;    
    
  return (
    <div className={`card-content ${isFlipped ? 'flipped' : ''}`}>
      <div className="card-text">
        {isFlipped ? answer : question}
      </div>
    </div>
  );
};

export default CardContent;
