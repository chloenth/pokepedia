import { useEffect, useState } from 'react';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Pokemon</h1>
    </div>
  );
};

export default App;
