/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { ReactComponent as ReactJS } from '../assets/react.svg';
import { ReactComponent as NextJS } from '../assets/nextjs.svg';
import { ReactComponent as Javascript } from '../assets/javascript.svg';
import { ReactComponent as NodeJS } from '../assets/nodejs.svg';
import CardProject from '../components/CardProject';

const Home = () => {
  return (
    <>
      <main>
        <section>
          <h1 className="text-red-400 text-4xl font-medium">Holla, I'm Alex Muhammad</h1>
          <p className="w-2/3 mt-4 text-md">
            I’m a <span className="text-primaryLight">frontend engineer</span>, love to make great
            stuff happen since 2022. By the way, welcome to my personal website.
          </p>
          <div className="flex mt-[35px] gap-[15px]">
            <button className="px-6 py-3 border-dotted border-2 border-primaryLight rounded-md text-primaryLight font-medium text-md hover:bg-primaryLight hover:bg-opacity-40 hover:underline">
              Read The Blogs
            </button>
            <button className="px-6 py-3 border-dotted border-2 border-primaryLight rounded-md text-primaryLight font-medium text-md hover:bg-primaryLight hover:bg-opacity-40 hover:underline">
              Know About Me
            </button>
            <button className="px-6 py-3 border-dotted border-2 border-primaryLight rounded-md text-primaryLight font-medium text-md hover:bg-primaryLight hover:bg-opacity-40 hover:underline">
              Resume
            </button>
          </div>
        </section>
        <section className="mt-[70px]">
          <h1 className="text-red-400 text-2xl font-medium">Current Favorite Tech Stacks</h1>
          <div className="flex mt-[20px] gap-6">
            <ReactJS />
            <Javascript />
            <NodeJS />
            <NextJS />
          </div>
        </section>
        <section className="mt-[50px]">
          <h1 className="text-red-400 text-2xl font-medium">Featured Projects</h1>
          <div className="flex mt-[20px] flex-wrap gap-4">
            <CardProject />
          </div>
          <a
            href="#"
            className="inline-flex w-full items-center justify-center px-4 py-2 rounded border-dotted border-2 border-primaryLight mt-3 text-primaryLight font-medium hover:bg-primaryLight hover:bg-opacity-40 hover:underline">
            See More
          </a>
        </section>
        <div className="border-b-2 border-[gray] mt-8" />
      </main>
      <footer className="mt-8">
        <h4 className="text-md underline decoration-wavy">2023 | alexmuhammad__</h4>
      </footer>
    </>
  );
};

export default Home;
