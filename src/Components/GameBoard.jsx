import React, { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, activePlayerSymbbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function selectSquareHandler(rowIndex, colIndex) {
    setGameBoard((prevState) => {
      const updatedboard = [...prevState.map((innerArray) => [...innerArray])];
      updatedboard[rowIndex][colIndex] = activePlayerSymbbol;
      return updatedboard;
    });
    onSelectSquare();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button onClick={() => selectSquareHandler(rowIndex, colIndex)}>{playerSymbol}</button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
