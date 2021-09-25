import React, { useState } from 'react'
import Table from './Table'
import Form from './Form'

function MyApp() {
  const [characters, setCharacters] = useState([]);
  function removeOneCharacter(index) {
    const update = characters.filter((character, i) => {
      return i !== index
    });
    setCharacters(update);
  }
  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <Form />
    </div>
  )
}

export default MyApp;