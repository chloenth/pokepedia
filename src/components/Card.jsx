/* eslint-disable react/prop-types */
import '../Card.css';

const Card = ({ pokemon }) => {
  console.log(pokemon.abilities);
  const ability = pokemon.abilities.find((a) => !a.is_hidden);
  const hiddenAbility = pokemon.abilities.find((a) => a.is_hidden);

  return (
    <div className='w-72 card rounded-xl drop-shadow-2xl inline-block p-1 text-neutral-400'>
      <img
        className='w-full h-36 object-contain border-b border-black'
        src={pokemon.url}
        alt='dittoImage'
      />
      <div className='info-card  pb-8 text-center'>
        <h1 className='text-2xl font-bold py-6'>{pokemon.name}</h1>
        <p className='mb-2'>
          Types :{' '}
          {pokemon.types.map((p, i) => (
            <span
              key={i}
              className='bg-black text-white px-1.5 py-1 m-2 rounded-sm'
            >
              {p.type.name}
            </span>
          ))}
        </p>
        <p className='mb-2'>Base Experience : {pokemon.baseExp}</p>
        <p className='mb-2'>Height : {pokemon.height}</p>
        <p className='mb-2'>Weight : {pokemon.weight}</p>
        <div className='grid grid-cols-3 gap-3 mt-5 px-4 '>
          <div className='text-start'>
            Ability
            <div className='bg-black text-white px-1.5 py-1 mt-1 rounded-sm float-left'>
              {ability?.ability.name}
            </div>
          </div>
          <div className='col-span-2 text-end'>
            Hidden Ability
            <div className='bg-black text-white px-1.5 py-1 mt-1 rounded-sm w-min float-end'>
              {hiddenAbility?.ability.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
