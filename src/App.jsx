import React, {useState, useEffect, useRef} from 'react'
import useWordGame from './hooks/useWordGame.jsx'

function App() {
    const {
        textBoxRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        wordCount
    } = useWordGame(30)
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <div className="stats">
                <p>Time remaining: {timeRemaining}</p>
                <button 
                    onClick={startGame}
                    disabled={isTimeRunning}
                >
                    Start
                </button>
            </div>
            <h2>Word Count: {wordCount}</h2>
        </div>
    )
}

export default App