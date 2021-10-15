import LegendCell from "./LegendCipher";
import LegendEmpty from "./LegendEmpty";
export default function LegendColumn(props) {
  const baseHeight = 11;
  const baseWidth = 10;
  let ciphers = props.value.map((cipher) => {
    return (
      <LegendCell
        value={cipher.value}
        crossed={cipher.crossed}
        className="legend-top-inner"
      />
    );
  });

  let emptyHeight = baseHeight * (3 - props.value.length);
  let emptyWidth = baseWidth * 1;
  ciphers.push(
    <LegendEmpty
      className="legend-top-empty"
      height={emptyHeight}
      width={emptyWidth}
    />
  );
  return <div className={props.className}>{ciphers.reverse()}</div>;
}
