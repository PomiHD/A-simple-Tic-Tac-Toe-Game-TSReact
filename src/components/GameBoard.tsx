import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // console.log(typeof gameBoard);
  // console.log(gameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard].map((innerArr) => [...innerArr]);
      // console.log("prevGameBoard: " + prevGameBoard);
      // console.log(typeof [...prevGameBoard]);
      // console.log("[...prevGameBoard]: " + [...prevGameBoard]);
      // console.log("Before updatedBoard: " + updatedBoard);
      updatedBoard[rowIndex][colIndex] = "X";
      // console.log("After updatedBoard: " + updatedBoard);
      // console.log("{\n}");
      return updatedBoard;
    });
  }

  return (
    <ol id={"game-board"}>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
