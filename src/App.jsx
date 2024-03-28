import { useEffect, useState } from 'react';
import CardList from './components/CardList';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [pokeArray, setPokeArray] = useState([]);

  const fetchPokemon = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    const pokemon = {
      name: data.name,
      types: data.types,
      abilities: data.abilities,
      baseExp: data.base_experience,
      height: data.height,
      weight: data.weight,
      url: data.sprites.other.home.front_default,
    };
    setPokeArray((pokeArray) => [...pokeArray, pokemon]);
  };

  const fetchPokemonArr = async () => {
    const respone = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await respone.json();
    const pokeUrls = data.results;
    pokeUrls.map((p) => fetchPokemon(p.url));
  };

  useEffect(() => {
    fetchPokemonArr();
  }, []);

  return (
    <div>
      <h1 className='text-5xl text-center font-bold font-serif text-blue-900 tracking-widest mt-9 mb-12'>
        Pokemon
      </h1>
      <div className='container mx-auto'>
        <CardList pokeArray={pokeArray} />
      </div>
    </div>
  );
};

export default App;
