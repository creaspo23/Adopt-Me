import React from "react";
import { render } from "react-dom";
import  Lol  from "./Lol";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me !"),
    React.createElement(Lol, { name: "ali", animal: "x", breed: "m" }),
    React.createElement(Lol, { name: "omer", animal: "y", breed: "f" }),
    React.createElement(Lol, { name: "ahmed", animal: "z", breed: "m" }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
