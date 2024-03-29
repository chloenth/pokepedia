/* eslint-disable react/prop-types */
import Card from './Card';

const CardList = ({ pokeArray }) => {
  return (
    <div className='container mx-auto p-2 grid grid-cols-4 gap-10'>
      {pokeArray.map((poke) => {
        return <Card key={poke.id} pokemon={poke} />;
      })}
    </div>
  );
};

export default CardList;
