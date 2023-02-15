import React from 'react';

import CardFirst from '../assets/card-1.png';

const CardProject = () => {
  return (
    <>
      <div className="w-[49%] bg-white border-2 border-primaryLight rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:  relative">
        <a href="#">
          <img className="w-full rounded-t-lg" src={CardFirst} alt="" />
        </a>
        <div className="w-full h-1/5 flex items-center justify-center bg-primaryLight p-5 rounded-b-lg absolute bottom-0 bg-opacity-70">
          <a href="#">
            <h5 className="mb-2 text-md font-bold tracking-tight text-[white] dark:text-white">
              Lorem-ipsum
            </h5>
          </a>
        </div>
      </div>
      <div className="w-[49%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
        <a href="#">
          <img className="w-full rounded-t-lg" src={CardFirst} alt="" />
        </a>
        <div className="w-full h-1/5 flex items-center justify-center bg-primaryLight p-5 rounded-b-lg absolute bottom-0 bg-opacity-70">
          <a href="#">
            <h5 className="mb-2 text-md font-bold tracking-tight text-[white] dark:text-white">
              Lorem-ipsum
            </h5>
          </a>
        </div>
      </div>
    </>
  );
};

export default CardProject;
