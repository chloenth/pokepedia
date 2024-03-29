/* eslint-disable react/prop-types */
const SearchBox = ({ searchChange }) => {
  return (
    <div className='p-4'>
      <input
        className='p-3'
        type='search'
        placeholder='search pokemons'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
