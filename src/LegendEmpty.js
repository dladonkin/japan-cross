import React from "react";

export default class LegendEmpty extends React.Component {
  render() {
    const divStyle = {
      height: this.props.height + "px",
      width: this.props.width + "px",
    };
    return <div className={this.props.className} style={divStyle}></div>;
  }
}
