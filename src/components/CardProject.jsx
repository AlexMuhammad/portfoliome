import React from 'react';

import CardFirst from '../assets/card-1.png';

const CardProject = () => {
  return (
    <div className="w-full grid md:grid-cols-2 gap-4">
      <div className="w-full bg-white rounded-lg duration-200 shadow group/item relative">
        <a href="#">
          <img className="w-full rounded-t-lg" src={CardFirst} alt="" />
        </a>
        <div className="w-full h-1/5 flex items-center justify-center rounded-b-lg bg-primaryLight bottom-0 bg-opacity-70 opacity-0 group-hover/item:opacity-100 group-hover/item:duration-500 absolute">
          <a href="#">
            <h5 className="mb-2 text-md font-bold tracking-tight text-[white] dark:text-white">
              Lorem-ipsum
            </h5>
          </a>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg duration-200 shadow group/item relative">
        <a href="#">
          <img className="w-full rounded-t-lg" src={CardFirst} alt="" />
        </a>
        <div className="w-full h-1/5 flex items-center justify-center rounded-b-lg bg-primaryLight bottom-0 bg-opacity-70 opacity-0 group-hover/item:opacity-100 group-hover/item:duration-500 absolute">
          <a href="#">
            <h5 className="mb-2 text-md font-bold tracking-tight text-[white] dark:text-white">
              Lorem-ipsum
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
