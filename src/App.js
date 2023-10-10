import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import "./App.css";

const App = () => {
  

  return (
    <Router>
      <>
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
          <Route path="/" element={<Home />} />
          <Route path="/about-pokemon-app" element={<AboutPage />} />
        </Routes>
      </>
    </Router>
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
