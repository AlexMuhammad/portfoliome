/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { FiHome, FiTrello, FiBook, FiUser } from 'react-icons/fi';
import { MdOutlineNightlight, MdOutlineLightMode } from 'react-icons/md';
import { ReactComponent as NightIcon } from '../assets/night.svg';
import ThemeContext from '../context/ThemeContext';

const Navbar = () => {
  const { handleToggle, darkMode } = useContext(ThemeContext)
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
      <div className={`${!darkMode ? "bg-primaryLight" : "dark:bg-secondaryDark"} duration-300 transition-all w-full`}>
        <nav className="max-w-[960px] mx-auto py-10 px-10 h-20 hidden justify-between items-center bg-[trasparent] opacity-90 md:flex group relative">
          <h3 className="text-2xl font-medium ease-in-out hover:border-b-2 text-secondaryLight drop-shadow-sm hover:duration-700">alexmuhammad</h3>
          <div className="flex items-center gap-3 font-medium text-md text-secondaryLight drop-shadow-sm">
            {menuLinks.map((item, index) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                key={index}
                href="#"
                className="px-3 py-2 hover:rounded-md hover:bg-[gray] hover:bg-opacity-30 duration-300">
                {item.name}
              </a>
            ))}
            <div
              className="flex justify-center items-center bg-[gray] w-12 h-12 bg-opacity-25 rounded-full duration-700 cursor-pointer transition-all"
              onClick={handleToggle}>
              {darkMode ? <MdOutlineLightMode className='text-2xl' /> : <MdOutlineNightlight className='text-2xl' />}
            </div>
          </div>
        </nav>
      </div>
      <div className={`${darkMode ? "bg-primaryLight" : "dark:bg-secondaryDark"} w-full`}>
        <nav className="max-w-[100%] mx-auto py-10 px-6 h-20 flex justify-between items-center bg-[trasparent] opacity-90 md:hidden">
          <h3 className="font-medium text-md text-secondaryLight drop-shadow-sm">alexmuhammad</h3>
          <div className="flex justify-center items-center bg-[gray] w-12 h-12 bg-opacity-25 rounded-full duration-300" onClick={handleToggle}>
            {darkMode ? <MdOutlineLightMode className='text-2xl' /> : <MdOutlineNightlight className='text-2xl' />}
          </div>
        </nav>
      </div>
      <div className="fixed z-50 w-full px-5 -right-0 bottom-5">
        <nav className={`${darkMode ? "bg-primaryLight" : "dark:bg-secondaryDark"} duration-300 transition-all max-w-[960px] px-7 mx-auto h-18 opacity-90 rounded-xl md:hidden`}>
          <div className="flex items-center justify-between gap-8 font-medium text-center text-md text-secondaryLight drop-shadow-sm">
            {menuIcon.map((item, index) => {
              return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
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
