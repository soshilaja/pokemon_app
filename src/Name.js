import React from 'react'

const Name = ({ name, onNameChange }) => {
  return (
    <div>
      <label>Name: </label>
      <input value={name} onChange={onNameChange} />
    </div>
  );
};

export default Name