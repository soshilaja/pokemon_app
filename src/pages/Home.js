import React from "react";
import { useState } from "react";

const Home = () => {
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
      // console.log(data);
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
                  {" " + pokemonData.weight / 100}
                </p>
                <p>
                  <b>Pokemon Abilities:</b>
                  {pokemonData &&
                    pokemonData.abilities.map((abilities, id) => (
                      <span key={id}>
                        {id > 0 ? ", " : " "}
                        {abilities.ability.name}
                      </span>
                    ))}
                </p>
                <p>
                  <b>Pokemon Held items:</b>
                  {pokemonData &&
                    pokemonData.held_items.map((held_items, id) => (
                      <span key={id}>
                        {id > 0 ? ", " : " "}
                        {held_items.item.name}
                      </span>
                    ))}
                </p>
                <p>
                  <b>Pokemon Moves:</b>
                  {pokemonData &&
                    pokemonData.moves.map((moves, id) => (
                      <span key={id}>
                        {id > 0 ? ", " : " "}
                        {moves.move.name}
                      </span>
                    ))}
                  <br />
                </p>
                <p>
                  <b>Pokemon Types:</b>
                  {pokemonData &&
                    pokemonData.types.map((types, id) => (
                      <span key={id}>
                        {id > 0 ? ", " : " "}
                        {types.type.name}
                      </span>
                    ))}
                  <br />
                </p>
                <p>
                  <b>Pokemon Stats:</b>
                  {pokemonData &&
                    pokemonData.stats.map((stats, id) => (
                      <span key={id}>
                        {id > 0 ? ", " : " "}
                        {stats.stat.name}
                      </span>
                    ))}
                  <br />
                </p>
              </span>
            </>
          ) : (
            <h3>"No data to display"</h3>
          )}
        </div>
      </div>
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
            name="pokemonName"
            type="text"
            placeholder="pokemon name"
            value={pokemonName.toLowerCase()}
            onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
          />
          <button type="submit">Get Pokemon Data</button>
        </form>
      </div>
    </>
  );
};

export default Home;
