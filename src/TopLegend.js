import React from "react";
import LegendColumn from "./LegendColumn";

export default class TopLegend extends React.Component {
  render() {
    let renderedColumns = this.props.legendColumns.map((col, i) =>
      this.renderColumn(col, i)
    );
    return <div className="legend-top">{renderedColumns}</div>;
  }

  renderColumn(col, i) {
    return (
      <LegendColumn className="legend-top-column" value={col}></LegendColumn>
    );
  }
}
