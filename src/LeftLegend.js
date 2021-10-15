import React from "react";
import LegendRow from "./LegendRow";

export default class LeftLegend extends React.Component {
  render() {
    let renderedRows = this.props.desk.leftLegend.map((col, i) =>
      this.renderRow(col, i)
    );
    return <div className="legend-left">{renderedRows}</div>;
  }

  renderRow(row, i) {
    return (
      <LegendRow
        className="legend-left-row"
        value={row}
        desk={this.props.desk}
      ></LegendRow>
    );
  }
}
