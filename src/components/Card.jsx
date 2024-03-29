/* eslint-disable react/prop-types */
import '../Card.css';
import Ability from './card-components/Ability';
import TextInfo from './card-components/TextInfo';

const Card = ({ pokemon }) => {
  const ability = pokemon.abilities.find((a) => !a.is_hidden);
  const hiddenAbility = pokemon.abilities.find((a) => a.is_hidden);

  return (
    <div className='w-72 card rounded-xl drop-shadow-2xl inline-block p-1 '>
      <img
        className='w-full h-36 object-contain border-b border-black'
        src={pokemon.url}
        alt='dittoImage'
      />
      <div className='info-card h-auto min-h-max pb-8 text-center text-emerald-400'>
        <h1 className='text-2xl font-bold py-6 text-neutral-400'>
          {pokemon.name}
        </h1>
        <TextInfo label='Types :' info={pokemon.types} />
        <TextInfo label='Base Experience :' info={pokemon.baseExp} />
        <TextInfo label='Height :' info={pokemon.height} />
        <TextInfo label='Weight :' info={pokemon.weight} />

        <Ability label='Ability' info={ability?.ability.name} />

        <Ability
          label='Hidden Ability'
          info={hiddenAbility?.ability.name || 'none'}
        />
      </div>
    </div>
  );
};

export default Card;
