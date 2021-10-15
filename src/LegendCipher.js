export default function LegendCell(props) {
  let className =
    props.className +
    " " +
    (props.crossed ? "legend-cell-crossed" : "legend-cell");
  return <div className={className}>{props.value}</div>;
}
