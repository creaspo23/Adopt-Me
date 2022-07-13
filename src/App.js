import React from "react";
import ReactDOM from "react-dom/client";
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);