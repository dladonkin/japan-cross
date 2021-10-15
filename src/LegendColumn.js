import LegendCell from "./LegendCipher";
import LegendEmpty from "./LegendEmpty";
export default function LegendColumn(props) {
  let ciphers = props.value.map((cipher) => {
    return (
      <LegendCell
        value={cipher.value}
        crossed={cipher.crossed}
        className="legend-top-inner"
      />
    );
  });

  let emptyHeight =
    props.desk.settings.cellHeight *
    (props.desk.settings.topLegendHeight - props.value.length);
  let emptyWidth = props.desk.settings.cellWidth;
  ciphers.push(
    <LegendEmpty
      className="legend-top-empty"
      height={emptyHeight}
      width={emptyWidth}
    />
  );
  return <div className={props.className}>{ciphers.reverse()}</div>;
}
