// import React from "react"
import GamePlayed from "../GamePlayed"

const GameHistory = (props) => {

    const {gameHistory} = props


  return (
    <div>
        {gameHistory.map((history, index) => {
                return (
                  <div key={index} className='total_history'>
                    <h2>Game {index + 1}</h2>
                    {
                      history.map((rounds, index) => (
                        <GamePlayed key={index} {...rounds}/>
                      ))}
                  </div>
                )})} 
    </div>
  )
}

export default GameHistory
