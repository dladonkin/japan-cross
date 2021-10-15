import React from "react";
import Board from "./Board";
import LegendEmpty from "./LegendEmpty";
import TopLegend from "./TopLegend";
import LeftLegend from "./LeftLegend";
import "./Desk.css";

export default class Desk extends React.Component {
  render() {
    let state = {
      topLegend: this.getTopLegend(),
      leftLegend: this.getLeftLegend(),
      board: this.getBoard(),
      settings: {
        cellHeight: 11,
        cellWidth: 10,
        boardHeight: 5,
        boardWidth: 5,
        leftLegendWidth: 5,
        topLegendHeight: 5,
      },
    };
    return (
      <div className="desk">
        <LegendEmpty
          className="top-left-empty"
          width={state.settings.cellWidth * state.settings.leftLegendWidth - 1}
          height={state.settings.cellHeight * state.settings.topLegendHeight}
        />
        <TopLegend desk={state} />
        <div style={{ clear: "both" }} />
        <LeftLegend desk={state} />
        <Board desk={state} />
      </div>
    );
  }

  getTopLegend() {
    let cols = Array(5);
    cols[0] = [new Cipher(0, false)];
    cols[1] = [new Cipher(2, false), new Cipher(1, true)];
    cols[2] = [
      new Cipher(25, false),
      new Cipher(15, true),
      new Cipher(0, true),
    ];
    cols[3] = [new Cipher(3, false)];
    cols[4] = [new Cipher(1, false)];
    return cols;
  }

  getLeftLegend() {
    let rows = Array(5);
    rows[0] = [new Cipher(0, false)];
    rows[1] = [new Cipher(1, false), new Cipher(3, true)];
    rows[2] = [
      new Cipher(21, false),
      new Cipher(11, true),
      new Cipher(0, true),
    ];
    rows[3] = [new Cipher(2, false)];
    rows[4] = [new Cipher(4, false)];
    return rows;
  }

  getBoard() {
    let height = 5;
    let boardLines = Array(height);
    boardLines[0] = " | | | | ".split("|");
    boardLines[1] = " |*|*|X| ".split("|");
    boardLines[2] = "X|X|X|X|X".split("|");
    boardLines[3] = "*|*| |*|*".split("|");
    boardLines[4] = " |*|X| | ".split("|");
    return boardLines;
  }
}

class Cipher {
  constructor(value, crossed) {
    this.value = value;
    this.crossed = crossed;
  }
}
