/* eslint-disable react/prop-types */

const Ability = ({ info, label }) => {
  return (
    <div className='text-yellow-500 mt-2'>
      {label}
      <div className='bg-black text-white px-1.5 py-1 mt-1 rounded-sm w-max mx-auto '>
        {info}
      </div>
    </div>
  );
};

export default Ability;
