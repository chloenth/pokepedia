import { useEffect, useState } from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import SearchBox from './components/SearchBox';
import ErrorBoundry from './components/ErrorBoundry';
import { ErrorBoundary } from 'react-error-boundary';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [pokeArray, setPokeArray] = useState([]);
  const [searchField, setSearchField] = useState('');

  const fetchPokemon = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    const pokemon = {
      id: data.id,
      name: data.name,
      types: data.types,
      abilities: data.abilities,
      baseExp: data.base_experience,
      height: data.height,
      weight: data.weight,
      url: data.sprites.other.home.front_default,
    };

    return pokemon;
  };

  const fetchPokemonArr = async () => {
    const respone = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await respone.json();
    const pokeList = data.results;
    let pokemonArray = [];
    for (const poke of pokeList) {
      const pokemon = await fetchPokemon(poke.url);
      pokemonArray.push(pokemon);
    }

    return pokemonArray;
  };

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const filterPokemon = pokeArray.filter((poke) =>
    poke.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    fetchPokemonArr().then((result) => setPokeArray(result));
  }, []);

  return !pokeArray.length ? (
    <h1 className='text-3xl font-bold font-serif text-stone-600 tracking-widest p-9'>
      Loading ...
    </h1>
  ) : (
    <div className='text-center'>
      <h1 className='xs:text-4xl sm:text-5xl font-bold font-serif text-blue-900 tracking-widest p-9'>
        Pokemon
      </h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary FallbackComponent={ErrorBoundry}>
          <CardList pokeArray={filterPokemon} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default App;
