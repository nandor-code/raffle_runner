import "./App.css";
import Radium, { StyleRoot } from "radium";
import { Page } from "./stories/Page";

function App() {
  return (
    <StyleRoot>
      <div className="App">
        <Page />
      </div>
    </StyleRoot>
  );
}

export default Radium(App);
