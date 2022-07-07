import React from "react";
import { render } from "react-dom";
import SearchPramas from "./serachPramas";
const App = () => {
  return (
    <div>
      <h1>
        Adopt Me !
      </h1>
      <SearchPramas />  
    </div>
  )
};
render(<App />, document.getElementById("root"));
