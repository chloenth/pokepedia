/* eslint-disable react/prop-types */
import Card from './Card';

const CardList = ({ pokeArray }) => {
  console.log(pokeArray);

  return (
    <div>
      {pokeArray.map((poke, i) => (
        <Card key={i} pokemon={poke} />
      ))}
    </div>
  );
};

export default CardList;
