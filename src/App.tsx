import React from "react";
import "./App.css";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const [gameTurns, setGameTurns] = useState([]);
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTruns) => {
      let currentPlayer = "X";
      if (prevTruns.length > 0 && prevTruns[0].player==="X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTruns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className={"highlight-player"}>
          <Player
            initialName={"Player 1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
          />
          <Player
            initialName={"Player 2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
      logic
    </main>
  );
}

export default App;
