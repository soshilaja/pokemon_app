import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import "./App.css";

const App = () => {
  const [pokemonData, setPokemonData] = useState("");
  const [pokemonName, setPokemonName] = useState("");
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
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-pokemon-app">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                pokemonData={pokemonData}
                pokemonName={pokemonName}
                error={error}
                fetchPokemonData={fetchPokemonData}
                onPokemonNameChange={(e) =>
                  setPokemonName(e.target.value.toLowerCase())
                }
              />
            }
          />
          <Route path="/about-pokemon-app" element={<AboutPage />} />
        </Routes>
      </Router>
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
