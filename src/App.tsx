import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  return (
      <main>
        <div id = "game-container">
          <ol id ="players">
            <li>
              <span className={"player-name"}>
                Player 1
              </span>
                <span className={"player-symbol"}> X</span>
            </li>
              <li>
              <span className={"player-name"}>
                Player 2
              </span>
                  <span className={"player-symbol"}> O</span>
              </li>
          </ol>
            game board
        </div>
          logic
      </main>
  )
}

export default App
