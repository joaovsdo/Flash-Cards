import React from 'react';
import ProgressBar from "./ProgressBar";
import CardContent from "./CardContent";
import CardControls from './CardControls';
import './FlashCard.css'

const FlashCard = ({
  cardData,
  currentIndex,
  totalCards,
  isFlipped,
  onNext,
  onPrev,
  onFlip,
}) => { 

  return (
    <div className="flashcard">
      <ProgressBar currentIndex={currentIndex} totalCards={totalCards} />
      <div className='card'>
        <CardContent cardData={cardData} isFlipped={isFlipped} />
        <CardControls onNext={onNext} onPrev={onPrev} onFlip={onFlip} />
      </div>
    </div>
  );
};

export default FlashCard