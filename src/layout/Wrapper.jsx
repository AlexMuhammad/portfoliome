/* eslint-disable react/prop-types */
import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className="w-full">
      <div className="max-w-[960px] mx-auto px-5 md:px-10 relative">{children}</div>
    </div>
  );
};

export default Wrapper;
