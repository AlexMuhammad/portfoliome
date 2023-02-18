/* eslint-disable react/no-unescaped-entities */
<<<<<<< HEAD
import { React, useEffect } from 'react';

import Typed from 'react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css';
=======
import React from 'react';
>>>>>>> 071e97a255508066d21cbc21d16bb5718f03a21c

import { ReactComponent as ReactJS } from '../assets/react.svg';
import { ReactComponent as NextJS } from '../assets/nextjs.svg';
import { ReactComponent as Javascript } from '../assets/javascript.svg';
import { ReactComponent as NodeJS } from '../assets/nodejs.svg';
import CardProject from '../components/CardProject';

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <main className="mt-8 md:mt-20 h-full">
        <section data-aos="fade-up" data-aos-delay="50">
          <h1 className="text-2xl font-medium sm:text-primaryDark md:text-5xl">
            Holla, I'm{' '}
            <span>
              <Typed
                strings={['Alex Muhammad', 'Frontend Engineer']}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </span>
          </h1>
          <p className="w-[90%] text-justify md:w-2/3 mt-4 text-md">
            I’m a <span className="text-primaryLight">frontend engineer</span>, love to make great
            stuff happen since 2022. By the way, welcome to my personal website.
          </p>
          <div className="flex mt-5 md:mt-[35px] gap-1 md:gap-[15px]">
            <button className="text-[12px] px-2 py-3 md:px-6 md:py-3 border-dotted border-2 border-primaryLight rounded-md text-primaryLight font-medium md:text-xl hover:bg-primaryLight hover:bg-opacity-40 duration-300">
              Read The Blogs
            </button>
            <button className="text-[12px] px-2 md:px-6 py-3 md:y-3 border-dotted border-2 border-primaryLight rounded-md text-primaryLight font-medium md:text-xl hover:bg-primaryLight hover:bg-opacity-40 duration-300">
              Know About Me
            </button>
            <button className="text-[12px] px-2 md:px-6 py-3 md:y-3 border-dotted border-2 border-primaryLight rounded-md text-primaryLight font-medium md:text-xl hover:bg-primaryLight hover:bg-opacity-40 duration-300">
              Resume
            </button>
          </div>
        </section>
        <section className="mt-10 md:mt-[70px]" data-aos="fade-up" data-aos-delay="250">
          <h1 className="text-red-400 text-xl md:text-2xl font-medium">
            Current Favorite Tech Stacks
          </h1>
          <div className="flex mt-2 md:mt-[20px] gap-6">
            <ReactJS className="w-10 md:w-12" />
            <Javascript className="w-10 md:w-12" />
            <NodeJS className="w-10 md:w-12" />
            <NextJS className="w-10 md:w-12" />
          </div>
        </section>
        <section className="mt-[25px] md:mt-[50px]" data-aos="fade-up" data-aos-delay="350">
          <h1 className="text-red-400 text-xl md:text-2xl font-medium">Featured Projects</h1>
          <div className="flex mt-[20px] flex-wrap gap-4">
            <CardProject />
          </div>
          <a
            href="#"
            className="inline-flex w-full items-center justify-center px-4 py-2 rounded border-dotted border-2 border-primaryLight mt-3 text-primaryLight font-medium hover:bg-primaryLight hover:bg-opacity-40 text-md md:text-xl">
            See More
          </a>
        </section>
        <div className="border-b-2 border-[gray] mt-8" />
      </main>
      <footer className="mt-8 mb-24 md:mb-10">
        <h4 className="text-md">2023 | alexmuhammad__</h4>
      </footer>
    </>
  );
};

export default Home;
