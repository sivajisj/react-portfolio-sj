import React from "react";

import Counter from "../assets/Counter.png";
import nft from "../assets/nft.png";
import MovieReview from "../assets/MovieReview.png";
import Meme from "../assets/meme.jpg";
import Rocket from "../assets/Rocket.png";
import Room from "../assets/chat-rooms.jpg";

const Workk = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-400">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* container */}
        <div
          name="grid-container"
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {/* Grid-item */}
          <div
            style={{ backgroundImage: `url(${MovieReview})` }}
            className="shadow-lg shadow-[#040c16] container
                items-center group rounded-md flex justify-center
                mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <h3 className="text-2xl font-bold text-white tracking-wider text-center text-center">
                Solana On-Chain Movie Review System
              </h3>

              <div className="flex justify-center items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://expense-tracker-sjj.netlify.app"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    {" "}
                    View on Explorer
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sivajisj/movie-review-system/tree/main/anchor-movie-review-program"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Room})` }}
            className="shadow-lg shadow-[#040c16] container
                items-center group rounded-md flex justify-center
                mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <h3 className="text-2xl font-bold text-white tracking-wider text-center mx-6">
                StudyBud Chat Room Using Django
              </h3>

              <div className="flex justify-center items-center">
                <a href="https://chat-rooms-sj.onrender.com">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/sivajisj/Django-space/tree/main/studybud">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Meme})` }}
            className="shadow-lg shadow-[#040c16] container
                items-center group rounded-md flex justify-center
                mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <h3 className="text-2xl font-bold text-white tracking-wider text-center mx-6">
                React JS Random Meme generator
              </h3>

              <div className="flex justify-center items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://meme-generator-react-sj.netlify.app"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    {" "}
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sivajisj/meme-generator-react"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Rocket})` }}
            className="shadow-lg shadow-[#040c16] container
                items-center group rounded-md flex justify-center
                mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <h3 className="text-2xl font-bold text-white tracking-wider text-center mx-6">
                Javascript & Tailwindcss Rocket website
              </h3>

              <div className="flex justify-center items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sj-rockets-space.onrender.com/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    {" "}
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sivajisj/sj-rockets"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Counter})` }}
            className="shadow-lg shadow-[#040c16] container
                items-center group rounded-md flex justify-center
                mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <h3 className="text-2xl font-bold text-white tracking-wider text-center mx-6">
                On-Chain State Management dApp – Solana + Next.js
              </h3>

              <div className="flex justify-center items-center">
                <a
                  target="_blank"
                  href="https://explorer.solana.com/address/EcGhLkbDw9rWoJXgwfQiJEy32THQftmVY3mQwKxY6xk1?cluster=devnet/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    {" "}
                    View on Explorer
                  </button>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/sivajisj/anchor-state-management"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${nft})` }}
            className="shadow-lg shadow-[#040c16] container
                items-center group rounded-md flex justify-center
                mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <h3 className="text-2xl font-bold text-white tracking-wider text-center mx-6">
                Metaplex NFT Minting Program – NFT Platform
              </h3>

              <div className="flex justify-center items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://explorer.solana.com/address/b5hqtPUsLTBvWM3qryPgm7PCYBNoSDVxXpzysEMCtrw?cluster=devnet"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    {" "}
                    View On Explorer
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sivajisj/solana-web3js-development/tree/master/nft-with-metaplex"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workk;
