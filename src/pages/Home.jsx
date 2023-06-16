/* eslint-disable react/no-unescaped-entities */
import { React, useContext, useEffect } from 'react';

import Typed from 'react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ReactComponent as ReactJS } from '../assets/react.svg';
import { ReactComponent as NextJS } from '../assets/nextjs.svg';
import { ReactComponent as Javascript } from '../assets/javascript.svg';
import { ReactComponent as NodeJS } from '../assets/nodejs.svg';
import ThemeContext from '../context/ThemeContext';
// import CardProject from '../components/CardProject';

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const { darkMode } = useContext(ThemeContext)
  return (
    <>
      <main className="h-full mt-8 md:mt-20">
        <section data-aos="fade-up" data-aos-delay="50">
          <h1 className={`${!darkMode ? "text-primaryDark" : "text-white"} duration-300 transition-all text-2xl font-medium  md:text-5xl`}>
            Holla, I'm{' '}
            <span>
              <Typed
                className="text-primaryLight"
                strings={['Alex Muhammad', 'Frontend Developer']}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </span>
          </h1>
          <p className={`${!darkMode ? "text-primaryDark" : "text-white"} w-[90%] text-justify md:w-2/3 mt-4 text-md`}>
            I’m a <a href='https://en.wikipedia.org/wiki/Front-end_web_development' className="font-medium cursor-pointer hover:underline text-primaryLight" target="_blank" rel="noreferrer">Frontend Developer</a>, who crafts simple interfaces with a cool flair, delivering engaging and user-friendly experiences. With a profound understanding of HTML, CSS, and JavaScript, I optimize responsive layouts and seamless interactions, creating visually stunning interfaces with minimalistic design.
          </p>
          <div className="flex mt-5 md:mt-[35px] gap-1 md:gap-[15px]">
            <button className={`text-[12px] px-2 py-3 md:px-6 md:py-3 border-dotted border-2 rounded-md  font-medium md:text-xl  hover:bg-opacity-40 duration-300 ${!darkMode ? "text-primaryLight border-primaryLight hover:bg-primaryLight" : "text-white border-white hover:bg-white"}`}>
              Read The Blogs
            </button>
            <button className={`text-[12px] px-2 py-3 md:px-6 md:py-3 border-dotted border-2 rounded-md  font-medium md:text-xl  hover:bg-opacity-40 duration-300 ${!darkMode ? "text-primaryLight border-primaryLight hover:bg-primaryLight" : "text-white border-white hover:bg-white"}`}>
              Know About Me
            </button>
            <button className={`text-[12px] px-2 py-3 md:px-6 md:py-3 border-dotted border-2 rounded-md  font-medium md:text-xl  hover:bg-opacity-40 duration-300 ${!darkMode ? "text-primaryLight border-primaryLight hover:bg-primaryLight" : "text-white border-white hover:bg-white"}`}>
              Resume
            </button>
          </div>
        </section>
        <section className="mt-10 md:mt-[70px]" data-aos="fade-up" data-aos-delay="250">
          <h1 className={`${!darkMode ? "text-primaryDark" : "text-white"} text-xl font-medium  md:text-2xl`}>
            Current Favorite Tech Stacks
          </h1>
          <div className="flex mt-2 md:mt-[20px] gap-6">
            <ReactJS className="w-10 md:w-12" />
            <Javascript className="w-10 md:w-12" />
            <NodeJS className="w-10 md:w-12" />
            <NextJS className="w-10 md:w-12" />
          </div>
        </section>
        <div className="border-b-2 border-[gray] mt-8" />
      </main>
      <footer className="mt-8 mb-24 md:mb-10">
        <h4 className={`${!darkMode ? "text-primaryDark" : "text-white"} text-md`}>2023 | alexmuhammad__</h4>
      </footer>
    </>
  );
};

export default Home;
