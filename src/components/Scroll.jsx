/* eslint-disable react/prop-types */
const Scroll = ({ children }) => {
  return (
    <div
      style={{ height: '550px', borderTopWidth: '.5px' }}
      className='overflow-y-scroll border-slate-400 mt-6'
    >
      {children}
    </div>
  );
};

export default Scroll;
