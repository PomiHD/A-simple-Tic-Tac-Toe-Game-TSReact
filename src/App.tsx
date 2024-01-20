import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from "./components/Player";
function App() {


  return (
      <main>
        <div id = "game-container">
          <ol id ="players">
              <Player name={"Player 1"} symbol={"X"} />
              <Player name={"Player 2"} symbol={"O"} />
          </ol>
            game board
        </div>
          logic
      </main>
  )
}

export default App
