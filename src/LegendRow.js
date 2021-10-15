import LegendCell from "./LegendCipher";
import LegendEmpty from "./LegendEmpty";
export default function LegendRow(props) {
  let ciphers = props.value.map((cipher) => {
    return (
      <LegendCell
        value={cipher.value}
        crossed={cipher.crossed}
        className="legend-left-inner"
      />
    );
  });

  let emptyHeight = props.desk.settings.cellHeight * 1;
  let emptyWidth =
    props.desk.settings.cellWidth *
    (props.desk.settings.leftLegendWidth - props.value.length);
  ciphers.push(
    <LegendEmpty
      className="legend-left-inner"
      height={emptyHeight}
      width={emptyWidth}
    />
  );
  return <div className={props.className}>{ciphers.reverse()}</div>;
}
