import React from "react";
import { render } from "react-dom";
import Lol from "./Lol";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me !"),
  //   React.createElement(Lol, { name: "ali", animal: "x", breed: "m" }),
  //   React.createElement(Lol, { name: "omer", animal: "y", breed: "f" }),
  //   React.createElement(Lol, { name: "ahmed", animal: "z", breed: "m" }),
  // ]);

  return (
    <div>
      <h1>
        Adopt Me !
      </h1>

      <Lol name="lorem" animal="dog" breed="con" />
      <Lol name="lorem1" animal="dog1" breed="con1" />
      <Lol name="lorem2" animal="dog2" breed="con2" />



    </div>
  )
};
render(<App />, document.getElementById("root"));
