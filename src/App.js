import React from "react";
import ReactDOM from "react-dom/client";
import SearchPramas from "./serachPramas";
const App = () => {
  return (

    <div>
       <React.StrictMode>
      <h1>
        Adopt Me !
      </h1>
      <SearchPramas />  
      </React.StrictMode>
    </div>
  )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);