/* eslint-disable react/prop-types */
const TextInfo = ({ info, label }) => {
  return (
    <div className='mb-2'>
      {label}
      <span className='text-neutral-400'>
        {' '}
        {isNaN(info)
          ? info.map((t, i) => (
              <span
                key={i}
                className='bg-black text-white px-1.5 py-1 m-2 rounded-sm'
              >
                {t.type.name}
              </span>
            ))
          : info}
      </span>
    </div>
  );
};

export default TextInfo;
