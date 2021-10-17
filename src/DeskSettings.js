import React from "react";

export default class DeskSettings extends React.Component {
  constructor() {
    super();
    this.state = {
      widthValue: "5",
      heightValue: "5",
    };

    this.handleChangeWidth = this.handleChangeWidth.bind(this);
    this.handleChangeHeight = this.handleChangeHeight.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.startSampleDesk = this.startSampleDesk.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{ clear: "both" }}>
          Width:{" "}
          <input
            type="text"
            value={this.state.widthValue}
            onChange={this.handleChangeWidth}
          />
        </div>
        ;
        <div style={{ clear: "both" }}>
          Height:{" "}
          <input
            type="text"
            value={this.state.heightValue}
            onChange={this.handleChangeHeight}
          />
        </div>
        <div>
          <button type="submit">Start</button>
        </div>
        <div>
          <button onClick={this.startSampleDesk}>Sample Desk</button>
        </div>
      </form>
    );
  }

  handleChangeWidth(event) {
    this.setState({ widthValue: event.target.value });
  }

  handleChangeHeight(event) {
    this.setState({ heightValue: event.target.value });
  }

  handleSubmit() {
    let width = parseInt(this.state.widthValue);
    let height = parseInt(this.state.heightValue);
    let desk = {
      topLegend: this.getEmptyTopLegend(width),
      leftLegend: this.getEmptyLeftLegend(height),
      board: this.getEmptyBoard(width, height),
      settings: {
        cellHeight: 11,
        cellWidth: 10,
        boardHeight: height,
        boardWidth: width,
        leftLegendWidth: 1,
        topLegendHeight: 1,
      },
    };
    this.props.setDesk(desk);
  }

  getEmptyTopLegend(width) {
    return Array(width).fill([new Cipher(0, false)]);
  }
  getEmptyLeftLegend(height) {
    return Array(height).fill([new Cipher(0, false)]);
  }
  getEmptyBoard(width, height) {
    return Array(height).fill(Array(width).fill(" "));
  }

  startSampleDesk() {
    this.props.setDesk({
      topLegend: this.getSampleTopLegend(),
      leftLegend: this.getSampleLeftLegend(),
      board: this.getSampleBoard(),
      settings: {
        cellHeight: 11,
        cellWidth: 10,
        boardHeight: 5,
        boardWidth: 5,
        leftLegendWidth: 5,
        topLegendHeight: 5,
      },
    });
  }

  getSampleTopLegend() {
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

  getSampleLeftLegend() {
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

  getSampleBoard() {
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
