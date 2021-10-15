import LegendCell from "./LegendCipher";
import LegendEmpty from "./LegendEmpty";
export default function LegendRow(props) {
  const baseHeight = 11;
  const baseWidth = 10;
  let ciphers = props.value.map((cipher) => {
    return (
      <LegendCell
        value={cipher.value}
        crossed={cipher.crossed}
        className="legend-left-inner"
      />
    );
  });

  let emptyHeight = baseHeight * 1;
  let emptyWidth = baseWidth * (3 - props.value.length);
  ciphers.push(
    <LegendEmpty
      className="legend-left-inner"
      height={emptyHeight}
      width={emptyWidth}
    />
  );
  return <div className={props.className}>{ciphers.reverse()}</div>;
}
