/* eslint-disable react/prop-types */
import Ability from './card-components/Ability';
import TextInfo from './card-components/TextInfo';

const Card = ({ pokemon }) => {
  const { name, types, abilities, baseExp, height, weight, url } =
    pokemon && pokemon;
  const ability = abilities.find((a) => !a.is_hidden);
  const hiddenAbility = abilities.find((a) => a.is_hidden);

  return (
    <div className='xs:w-full sm:w-72 rounded-xl drop-shadow-2xl inline-block p-1 '>
      <img
        className='w-full h-36 bg-linear-gradient-primary object-contain border-b border-black'
        src={url}
        alt='dittoImage'
      />
      <div className='bg-linear-gradient-secondary h-auto min-h-max pb-8 text-center text-emerald-400'>
        <h1 className='text-2xl font-bold py-6 text-neutral-400'>{name}</h1>
        <TextInfo label='Types :' info={types} />
        <TextInfo label='Base Experience :' info={baseExp} />
        <TextInfo label='Height :' info={height} />
        <TextInfo label='Weight :' info={weight} />

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
