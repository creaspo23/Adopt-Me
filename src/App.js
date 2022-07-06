const Lol = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me !"),
    React.createElement(Lol, { name: "ali", animal: "x", breed: "m" }),
    React.createElement(Lol, { name: "omer", animal: "y", breed: "f" }),
    React.createElement(Lol, { name: "ahmed", animal: "z", breed: "m" }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
