/* eslint-disable react/prop-types */
const SearchBox = ({ searchChange }) => {
  return (
    <div className='p-4'>
      <input
        className='p-3 border border-sky-200 rounded'
        type='search'
        placeholder='search pokemons'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
