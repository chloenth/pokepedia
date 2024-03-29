/* eslint-disable react/prop-types */
import Card from './Card';

const CardList = ({ pokeArray }) => {
  return (
    <div className='container mx-auto p-2 grid justify-items-center grid-cols-1 md:grid-cols-2 md:gap-x-0 lg:grid-cols-3 xl:grid-cols-4 gap-y-10'>
      {pokeArray.map((poke) => {
        return <Card key={poke.id} pokemon={poke} />;
      })}
    </div>
  );
};

export default CardList;
