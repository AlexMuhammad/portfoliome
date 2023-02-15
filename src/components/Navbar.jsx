import React from 'react';
import { ReactComponent as NightIcon } from '../assets/night.svg';

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex justify-between items-center bg-[trasparent] opacity-90 bg-primaryLight px-[350px]">
      <h3 className="font-medium text-md text-secondaryLight drop-shadow-sm">alexmuhammad</h3>
      <div className="flex items-center text-md text-secondaryLight font-medium drop-shadow-sm gap-5">
        <a
          href="#"
          className="hover:underline hover:decoration-wavy p-1 hover:rounded-md hover:bg-[gray] hover:bg-opacity-30">
          Home
        </a>
        <a
          href="#"
          className="hover:underline hover:decoration-wavy p-1 hover:rounded-md hover:bg-[gray] hover:bg-opacity-30">
          Projects
        </a>
        <a
          href="#"
          className="hover:underline hover:decoration-wavy p-1 hover:rounded-md hover:bg-[gray] hover:bg-opacity-30">
          Blogs
        </a>
        <a
          href="#"
          className="hover:underline hover:decoration-wavy p-1 hover:rounded-md hover:bg-[gray] hover:bg-opacity-30">
          About
        </a>
        <div className="flex justify-center items-center bg-[gray] w-12 h-12 bg-opacity-25 rounded-full">
          <NightIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
