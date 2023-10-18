import React from "react";

const Form = ({fetchPokemonData, pokemonName, onPokemonNameChange}) => {

  return (
    <div>
      <form onSubmit={fetchPokemonData}>
        <input
          name="pokemonName"
          type="text"
          placeholder="pokemon name"
          value={pokemonName.toLowerCase()}
          onChange={onPokemonNameChange}
        />
        <button type="submit">Get Pokemon Data</button>
      </form>
    </div>
  );
};

export default Form;
