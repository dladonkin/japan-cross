//import logo from "./logo.svg";
import "./App.css";
import Desk from "./Desk";
import DeskSettings from "./DeskSettings";
import { useState } from "react";

function App() {
  let [desk, setDesk] = useState();

  if (desk) {
    let info =
      "Width " +
      desk.settings.boardWidth +
      ", height: " +
      desk.settings.boardHeight;
    // let info = JSON.stringify(desk);
    return (
      <div>
        <div style={{ clear: "both" }}>{info}</div>
        <Desk desk={desk} />
      </div>
    );
  } else {
    return <DeskSettings setDesk={setDesk} />;
  }
}

export default App;
