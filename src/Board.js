import React from "react";
import Square from "./Square.js";

export default class Board extends React.Component {
  render() {
    let lines = this.props.board.map((boardLine, row) => {
      let oneLine = boardLine.map((cell, col) => {
        return this.renderSquare(cell, row, col);
      });
      return <div className="board-row">{oneLine}</div>;
    });
    return <div className="board">{lines}</div>;
  }

  renderSquare(cell, row, col) {
    switch (cell) {
      case " ":
        return (
          <Square
            className="square"
            onClick={() => {
              return;
            }}
            value=""
          ></Square>
        );
      case "*":
        return (
          <Square
            className="square"
            onClick={() => {
              return;
            }}
            value="•"
          ></Square>
        );
      case "X":
        return (
          <Square
            className="square-full"
            onClick={() => {
              return;
            }}
            value=""
          ></Square>
        );
      default:
        throw new Error("Unexpected value " + cell);
    }
  }
}
