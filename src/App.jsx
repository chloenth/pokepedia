import { useEffect, useState } from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import SearchBox from './components/SearchBox';

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
    <div className='text-center'>
      <h1 className='text-5xl  font-bold font-serif text-blue-900 tracking-widest p-9'>
        Pokemon
      </h1>
      <SearchBox />
      <Scroll>
        <CardList pokeArray={pokeArray} />
      </Scroll>
    </div>
  );
};

export default App;
