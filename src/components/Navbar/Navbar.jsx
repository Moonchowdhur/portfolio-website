import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai";

import { LuHeartHandshake } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="flex  md:px-36 z-10 bg-opacity-30 justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div className="flex items-center gap-3">
        <img
          src="https://i.ibb.co/Sr23tpn/1685604437506.jpg"
          className="md:w-14 md:h-14 w-7 h-7 rounded-full"
          alt=""
        />
        <h1 className="md:text-3xl text-lg font-bold text-[#16FF00]  ml-2">
          Kaushani
        </h1>
      </div>
      <div>
        <ul className="flex items-center gap-3">
          <Link
            activeClass="bg-[#16FF00] p-2 text-xl md:text-2xl "
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <AiOutlineHome className="text-white text-base md:text-2xl" />
          </Link>
          <Link
            activeClass="bg-[#16FF00] p-2  rounded-2xl "
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <AiOutlineUser className="text-white text-base md:text-2xl" />
          </Link>
          <Link
            activeClass="bg-[#16FF00] p-2  rounded-2xl "
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <AiOutlineStar className="text-white text-base md:text-2xl" />
          </Link>
          <Link
            activeClass="bg-[#16FF00] p-2  rounded-2xl "
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <LuHeartHandshake className="text-white text-base md:text-2xl" />
          </Link>
          <Link
            activeClass="bg-[#16FF00] p-2 text-black rounded-2xl "
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <AiOutlineContacts className="text-white text-lg md:text-2xl" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
