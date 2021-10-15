export default function LegendCell(props) {
  let classNames = [
    props.className,
    props.crossed ? "legend-cell-crossed" : "legend-cell",
  ];
  return <div className={classNames.join(" ")}>{props.value}</div>;
}
