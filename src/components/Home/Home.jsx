import React from "react";
import { HiHand } from "react-icons/hi";
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";
import { AiFillHeart, AiOutlineArrowDown } from "react-icons/ai";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full py-16 pt-28 pb-16  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="md:flex md:mx-40 justify-between">
        <div className="relative">
          <img
            src="https://i.ibb.co/Sr23tpn/1685604437506.jpg"
            className="h-[500px] p-4 rounded-3xl"
            alt=""
          />
          <div className="bg-[#16FF00] bg-opacity-40   w-1/2 p-4 rounded-lg  absolute bottom-24 right-20">
            <h2 className="flex items-center gap-2 text-xl ">
              <AiFillHeart className="text-red-500 text-3xl" /> Projects
            </h2>
            <p className="text-2xl font-bold  ">30+ Projects</p>
          </div>
        </div>
        <div className="md:w-[60%] mx-5 md:mx-0 mb-5">
          <p className="mt-4 flex  text-lg  items-center gap-2 md:text-4xl font-bold tracking-normal">
            Hello <HiHand className="text-yellow-400  animate-bounce" /> I'm
            Kaushani Chowdhury,
            <br />
          </p>
          <p className="mt-2  text-xl md:text-4xl font-bold tracking-normal">
            I am a
            <span className="ml-2 animate-pulse text-[#16FF00]">
              Mern Stack Developer.
            </span>
          </p>
          <p className="mt-14 text-lg font-medium ">
            I have a strong set of technical skills, great teamwork abilities, a
            love for learning, a problem-solving mindset, keep attention and
            dedication to my work and a strong commitment to my work.
          </p>
          <p className="mt-14 text-xl">Find with me</p>
          <div className="flex mb-10 mt-5 items-center gap-5">
            <a href="https://www.linkedin.com/in/kaushani-chowdhury-83a37918a/">
              <BsLinkedin className="text-3xl text-[#16FF00]" />
            </a>
            <a href="https://github.com/Moonchowdhur/">
              <BsGithub className="text-3xl text-[#16FF00]" />
            </a>
            <a href="https://www.instagram.com/meema.chowdhury/?igshid=MzRlODBiNWFlZA%3D%3D">
              <BsInstagram className="text-3xl text-[#16FF00]" />
            </a>
            <a href="https://www.facebook.com/meema.chowdhury.5?mibextid=ZbWKwL">
              <BsFacebook className="text-3xl text-[#16FF00]" />
            </a>
          </div>
          <div className="flex md:-mt-6 items-center gap-5 ">
            <a
              href="https://drive.google.com/uc?export=download&id=1uL6O29J_C4l7LlGwnpiR235YmrAhnqpw"
              className="my-9 flex items-center gap-2 md:w-4/12 px-2 py-3 rounded-2xl font-bold bg-[#16FF00] bg-opacity-40 "
              download={true}
            >
              Download Resume
              <AiOutlineArrowDown className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
