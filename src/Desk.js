import React from "react";
import Board from "./Board";
import LegendEmpty from "./LegendEmpty";
import TopLegend from "./TopLegend";
import LeftLegend from "./LeftLegend";
import "./Desk.css";

export default class Desk extends React.Component {
  render() {
    let desk = this.props.desk;
    const settings = desk.settings;
    return (
      <div className="desk">
        <LegendEmpty
          className="top-left-empty"
          width={settings.cellWidth * settings.leftLegendWidth - 1}
          height={settings.cellHeight * settings.topLegendHeight}
        />
        <TopLegend desk={desk} />
        <div style={{ clear: "both" }} />
        <LeftLegend desk={desk} />
        <Board desk={desk} />
      </div>
    );
  }
}
