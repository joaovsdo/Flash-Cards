import { useState } from 'react'
import './FlashCardApp.css'
import FlashCard from './FlashCard'
import cards from './cards'

function FlashCardApp() {
  
  const [cardDatas, SetCardDatas] = useState(cards)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const handleNext = () => {
    setIsFlipped(false)
    setCurrentIndex((PrevCurrentIndex) => PrevCurrentIndex + 1 > cards.length - 1 ? 0 : PrevCurrentIndex + 1)
  }

  const handlePrev = () => {
    setIsFlipped(false)
    setCurrentIndex((PrevCurrentIndex) => PrevCurrentIndex - 1 < 0 ? cards.length - 1 : PrevCurrentIndex - 1)
  }

  const handleFlip = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped)
  }

  return (
    <div className='flashcard-app'>
      <FlashCard 
        cardData={cardDatas[currentIndex]}
        currentIndex={currentIndex}
        totalCards={cardDatas.length}
        isFlipped={isFlipped}
        onNext={handleNext}
        onPrev={handlePrev}
        onFlip={handleFlip}
      />
    </div>
  )
}

export default FlashCardApp
