/* eslint-disable react/prop-types */
const Scroll = ({ children }) => {
  return (
    <div style={{ height: '550px' }} className='overflow-scroll'>
      {children}
    </div>
  );
};

export default Scroll;
