/* eslint-disable no-unused-vars */
import React from 'react';
import { FiHome, FiTrello, FiBook, FiUser } from 'react-icons/fi';
import { ReactComponent as NightIcon } from '../assets/night.svg';

const Navbar = () => {
  const menuLinks = [
    { name: 'Home', link: '#' },
    { name: 'Projects', link: '#' },
    { name: 'Blog', link: '#' },
    { name: 'About', link: '#' }
  ];
  const menuIcon = [
    { icon: FiHome, link: '#', name: 'Home' },
    { icon: FiTrello, link: '#', name: 'Projects' },
    { icon: FiBook, link: '#', name: 'Blog' },
    { icon: FiUser, link: '#', name: 'About' }
  ];
  return (
    <>
      <div className="w-full bg-primaryLight">
        <nav className="max-w-[960px] mx-auto py-10 px-10 h-20 hidden justify-between items-center bg-[trasparent] opacity-90 md:flex">
          <h3 className="font-medium text-md text-secondaryLight drop-shadow-sm">alexmuhammad</h3>
          <div className="flex items-center text-md text-secondaryLight font-medium drop-shadow-sm gap-3">
            {menuLinks.map((item, index) => (
              <a
                key={index}
                href="#"
                className="px-3 py-2 hover:rounded-md hover:bg-[gray] hover:bg-opacity-30 duration-300">
                {item.name}
              </a>
            ))}
            <div className="flex justify-center items-center bg-[gray] w-12 h-12 bg-opacity-25 rounded-full duration-300">
              <NightIcon />
            </div>
          </div>
        </nav>
      </div>
      <div className="w-full bg-primaryLight">
        <nav className="max-w-[100%] mx-auto py-10 px-6 h-20 flex justify-between items-center bg-[trasparent] opacity-90 md:hidden">
          <h3 className="font-medium text-md text-secondaryLight drop-shadow-sm">alexmuhammad</h3>
          <div className="flex justify-center items-center bg-[gray] w-12 h-12 bg-opacity-25 rounded-full duration-300">
            <NightIcon />
          </div>
        </nav>
      </div>
      <div className="w-full px-5 fixed -right-0 bottom-5 z-50">
        <nav className="max-w-[960px] px-7 mx-auto h-18 bg-primaryLight opacity-90 rounded-xl md:hidden">
          <div className="flex text-center justify-between items-center text-md text-secondaryLight font-medium drop-shadow-sm gap-8">
            {menuIcon.map((item, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="px-1 py-2 hover:rounded-md hover:bg-[gray] hover:bg-opacity-30 duration-300">
                  <item.icon size={30} className="inline-flex" />
                  <p className="text-[12px] font-normal text-center">{item.name}</p>
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
