import React from "react";
import { useState} from "react";
import "./App.css";

const App = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState("");
  const [error, setError] = useState(false);

  const fetchPokemonData = async (e) => {
    e.preventDefault();
    if (!pokemonName) {
      return;
    }
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await response.json();
      setPokemonData(data);
      console.log(data);
      //reset the input field
      setPokemonName("");
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <>
      <div className="pokemon">
        <span className="form-header">
          <b>
            {pokemonName
              ? `You are requesting for data on Pokemon: ${pokemonName}`
              : "Please enter a pokemon name or number"}
          </b>
        </span>
        <br />
        <form onSubmit={fetchPokemonData}>
          <input
            type="text"
            placeholder="pokemon name"
            value={pokemonName.toLowerCase()}
            onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
          />
          <button type="submit">Get Pokemon Data</button>
        </form>
        <br />
        <p>
          Pokémon are the creatures that inhabit the world of the Pokémon games.
          They can be caught using Pokéballs and trained by battling with other
          Pokémon. Each Pokémon belongs to a specific species but may take on a
          variant which makes it differ from other Pokémon of the same species,
          such as base stats, available abilities and typings.
        </p>
        <br />
      </div>
      <div className="display">
        <h1>
          {pokemonData
            ? pokemonData.name.charAt(0).toUpperCase() +
              pokemonData.name.substr(1) +
              " Data"
            : "Pokemon Data"}
        </h1>

        <div className="data-results">
          {error ? (
            <h3>"Pokemon not Found"</h3>
          ) : pokemonData ? (
            <>
              <span>
                <b>Sprites:</b>
                <p>
                  <img
                    src={
                      pokemonData.sprites.front_default ||
                      pokemonData.sprites.other["official-artwork"]
                        .front_default
                    }
                    alt={pokemonData.name}
                  />
                </p>
                <p>
                  <b>Pokemon ID:</b>
                  {" " + pokemonData.id}
                </p>
                <p>
                  <b>Pokemon Name:</b>
                  {" " + pokemonData.name}
                </p>
                <p>
                  <b>Pokemon Experience:</b>
                  {" " + pokemonData.base_experience}
                </p>
                <p>
                  <b>Pokemon Height in "cm":</b>
                  {" " + pokemonData.height / 10}
                </p>
                <p>
                  <b>Pokemon Order:</b>
                  {" " + pokemonData.order}
                </p>
                <p>
                  <b>Pokemon Weight in "grams":</b>
                  {" " + pokemonData.weight / 100 }
                </p>
                <p>
                  <b>Pokemon Abilities:</b>
                  {pokemonData &&
                    pokemonData.abilities.map(
                      (abilities) => " " + abilities.ability.name + ", "
                    )}
                </p>
                <p>
                  <b>Pokemon Held items:</b>
                  {pokemonData &&
                    pokemonData.held_items.map(
                      (held_items) => " " + held_items.item.name + ", "
                    )}
                </p>
                <p>
                  <b>Pokemon Moves:</b>
                  {pokemonData &&
                    pokemonData.moves.map(
                      (moves) => " " + moves.move.name + ", "
                    )}
                  <br />
                </p>
                <p>
                  <b>Pokemon Types:</b>
                  {pokemonData &&
                    pokemonData.types.map(
                      (types) => " " + types.type.name + ", "
                    )}
                  <br />
                </p>
                <p>
                  <b>Pokemon Stats:</b>
                  {pokemonData &&
                    pokemonData.stats.map(
                      (stats) => " " + stats.stat.name + ", "
                    )}
                  <br />
                </p>
              </span>
            </>
          ) : (
            <h3>"No data to display"</h3>
          )}
        </div>
      </div>
    </>
  );
};
export default App;


// import Name from "./Name";
// import FavoriteAnimal from "./FavoriteAnimal";
// import Display from "./Display";

// function App() {
//   const [name, setName] = useState("");
//   const [animal, setAnimal] = useState("");
//   return (
//     <form>
//       <Name name={name} onNameChange={(event) => setName(event.target.value)} />
//       <FavoriteAnimal animal={animal} onAnimalChange={(event) => setAnimal(event.target.value)}/>
//       <Display name={name} animal={animal}/>
//     </form>
//   );
// }

// export default App;
