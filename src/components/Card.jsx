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
      <div className='info-card h-auto min-h-max pb-8 text-center'>
        <h1 className='text-2xl font-bold py-6'>{pokemon.name}</h1>
        <p className='mb-2 text-emerald-400'>
          Types :
          {pokemon.types.map((p, i) => (
            <span
              key={i}
              className='bg-black text-white px-1.5 py-1 m-2 rounded-sm'
            >
              {p.type.name}
            </span>
          ))}
        </p>
        <p className='mb-2'>
          <span className='text-emerald-400'>Base Experience :</span> {''}
          {pokemon.baseExp}
        </p>
        <p className='mb-2'>
          <span className='text-emerald-400'>Height :</span> {pokemon.height}
        </p>
        <p className='mb-2'>
          <span className='text-emerald-400'>Weight :</span> {pokemon.weight}
        </p>
        <div className='text-emerald-400'>
          Ability
          <div className='bg-black text-white px-1.5 py-1 mt-1 rounded-sm w-max mx-auto '>
            {ability?.ability.name}
          </div>
        </div>

        <div className='text-emerald-400'>
          Hidden Ability
          <div className='bg-black text-white px-1.5 py-1 mt-1 rounded-sm w-max mx-auto'>
            {hiddenAbility?.ability.name || 'none'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
