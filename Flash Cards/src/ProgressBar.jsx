import React from 'react';
import './ProgressBar.css'

const ProgressBar = ({
    currentIndex,
    totalCards
}) => {
    const progressPercent = ((currentIndex + 1) / totalCards) * 100;

    return(
        <div className='progress-bar-container'>
            <div
                className="progress-fill"
                style={{ width: `${progressPercent}%` }}
            />
            <div className={`progress-percent ${
                progressPercent > 50 ? 'start' : ''}`}>
                {`${Math.round(progressPercent)} %`}
            </div>
            <div className="progress-text">
                {`${currentIndex + 1} of ${totalCards}`}
            </div>
            
        </div>
    )
}

export default ProgressBar