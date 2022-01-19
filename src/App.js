import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=898")
      .then(res => {
        console.log(res);
        setPokemon(res.data.results);
      })
      .catch(err => console.log(err))
  }, [name])

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>Pokemon API Using Fetch</h1>
      <form onSubmit={onSubmitHandler}>
        <button >Fetch Pokemon</button>
      </form>


      <ul>
        {
          pokemon.map((pokemon, i) => {
            return <li key={i}><a href={pokemon.url}>{pokemon.name}</a></li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
