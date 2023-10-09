import React from 'react'
// import { useState } from 'react';

const FavoriteAnimal = ({animal, onAnimalChange}) => {
  
  return (
    <div>
      <label>Favorite Animal: </label>
      <input
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  );
}

export default FavoriteAnimal