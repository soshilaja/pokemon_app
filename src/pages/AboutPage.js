import React from "react";


const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Pokemon App</h1>
      <p>
        Pokémon are the creatures that inhabit the world of the Pokémon games.
        They can be caught using Pokéballs and trained by battling with other
        Pokémon. Each Pokémon belongs to a specific species but may take on a
        variant which makes it differ from other Pokémon of the same species,
        such as base stats, available abilities and typings.
      </p>
      <br />
      <p>
        This React application is a Pokémon data retrieval tool. It utilizes the
        Pokémon API (specifically the PokeAPI) to fetch data about a Pokémon
        based on the name or number entered by the user. The application is
        built using React functional components and utilizes React hooks like
        useState for managing state. The application allows users to enter a
        Pokémon name or number in an input field and submit the request to fetch
        data for that specific Pokémon. Upon submission, the application makes
        an asynchronous fetch request to the PokeAPI, retrieves the Pokémon
        data, and displays it.
        <br />
        The UI consists of a form to input the Pokémon name or number, a section
        to display information about the entered Pokémon, and a section to
        display an image and various details of the Pokémon, such as its ID,
        name, experience, height, weight, abilities, held items, moves, types,
        and stats.
        <br />
        Additionally, the application handles potential errors gracefully,
        displaying a message if the Pokémon is not found or if there is no data
        to display.
        <br />
        Overall, the application provides a simple and interactive way for users
        to access and view Pokémon data through the PokeAPI.
        <br />
        Enjoy!
      </p>
      <i>
        <strong>Note:</strong> There are 1017 Pokemons as at the time of
        building this application.
      </i>
    </div>
  );
};

export default AboutPage;
