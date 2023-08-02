import { useEffect, useState } from "react";
import Cell from "./components/cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);
  const message = "it is now " + go + " 's go";
  //console.log(cells);

  function checkScore() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winningCombos.forEach((arr) => {
      let circleWins = arr.every((cell) => cells[cell] === "circle");
      if (circleWins) {
        setWinningMessage("Circle Wins!");
        return;
      }
    });

    winningCombos.forEach((arr) => {
      let crossWins = arr.every((cell) => cells[cell] === "cross");
      if (crossWins) {
        setWinningMessage("Cross Wins!");
        return;
      }
    });

    // console.log(cells);
    cells.every((cell) => cell !== undefined && cell !== null && cell !== "")
      ? setWinningMessage("Draw")
      : null;
  }

  //Reset
  function handleReset() {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setWinningMessage(null);
    setGo("circle");
  }
  useEffect(() => {
    checkScore();
  }, [cells]);
  return (
    <div className="app">
      <h1 className="title">Tic Tac Toe</h1>

      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winningMessage={winningMessage}
          />
        ))}
      </div>

      <p className="title">{winningMessage || message}</p>
      {winningMessage ? (
        <button className="reset_btn" onClick={handleReset}>
          Reset
        </button>
      ) : null}
    </div>
  );
}

export default App;
