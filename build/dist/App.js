import React, {useState, useEffect, useRef} from "../_snowpack/pkg/react.js";
import useWordGame from "./hooks/useWordGame.js";
function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount
  } = useWordGame(30);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "How fast do you type?"), /* @__PURE__ */ React.createElement("textarea", {
    ref: textBoxRef,
    onChange: handleChange,
    value: text,
    disabled: !isTimeRunning
  }), /* @__PURE__ */ React.createElement("div", {
    className: "stats"
  }, /* @__PURE__ */ React.createElement("p", null, "Time remaining: ", timeRemaining), /* @__PURE__ */ React.createElement("button", {
    onClick: startGame,
    disabled: isTimeRunning
  }, "Start")), /* @__PURE__ */ React.createElement("h2", null, "Word Count: ", wordCount));
}
export default App;
