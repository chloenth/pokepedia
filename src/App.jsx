import { useEffect, useState } from 'react';
import Card from './components/Card';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [pokemon, setPokemon] = useState({
    name: '',
    types: [],
    abilities: [],
    baseExp: 0,
    height: 0,
    weight: 0,
    url: '',
  });

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          types: data.types,
          abilities: data.abilities,
          baseExp: data.base_experience,
          height: data.height,
          weight: data.weight,
          url: data.sprites.other.home.front_default,
        });
      });
  }, []);

  return (
    <div>
      <h1 className='text-5xl text-center font-bold font-serif text-blue-900 tracking-widest mt-9 mb-12'>
        Pokemon
      </h1>
      <div className='container mx-auto'>
        <Card pokemon={pokemon} />
      </div>
    </div>
  );
};

export default App;
