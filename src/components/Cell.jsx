function Cell({ id, cell, setCells, go, setGo, cells, winningMessage }) {
  function handleClick(e) {
    //console.log(e.target);
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");
    //console.log(taken);
    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        handleCellChange("circle");
        setGo("cross");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        handleCellChange("cross");
        setGo("circle");
      }
    }
  }

  function handleCellChange(className) {
    //console.log(className);
    const nextCells = cells.map((cell, idx) => {
      if (idx === id) {
        return className;
      } else {
        return cell;
      }
    });
    //console.log(nextCells);
    setCells(nextCells);
  }
  return (
    <div
      className="square"
      id={id}
      onClick={(e) => {
        !winningMessage && !cell && handleClick(e);
      }}
    >
      <div className={cell}></div>
    </div>
  );
}

export default Cell;
