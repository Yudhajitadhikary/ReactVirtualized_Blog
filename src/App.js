import React, { useEffect } from "react";
import Lists from "./List";
import "./App.css";

function App() {
  let data = [];
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then(function (allpokemon) {
        allpokemon.results.forEach(function (pokemon) {
          let url = pokemon.url;
          fetch(url)
            .then((response) => response.json())
            .then(function (pokeData) {
              data.push(pokeData);
            });
        });
      });
  });
  return (
    <div className="App" style={{ backgroundColor: "greenyellow" }}>
      <h1>POKEMON VIRTUALIZE LIST</h1>
      <Lists data={data} />
    </div>
  );
}

export default App;
