import React from "react";
import cook1 from "../../assets/cook1.jpg";
import cook2 from "../../assets/cook2.jpg";
import cook3 from "../../assets/cook3.jpg";
import cook4 from "../../assets/cook4.jpg";
import tailwind from "../../assets/tailwind.png";
import js from "../../assets/jas.png";
import reat from "../../assets/react.png";
import nodej from "../../assets/node.png";
import mongod from "../../assets/mongo.png";
import fire from "../../assets/firee.png";
import { BiSolidBullseye } from "react-icons/bi";
const Secondp = () => {
  return (
    <div className="border-[#16FF00] border relative  rounded-2xl shadow-xl p-7">
      <div className="carousel md:w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={cook1} className="w-[700px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative md:w-full">
          <img src={cook2} className="w-[700px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={cook3} className="w-[700px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={cook4} className="w-[700px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <h2 className="my-6 text-[#16FF00] md:text-3xl tracking-wide font-bold">
        Cooking Lite
      </h2>
      {/* technology */}
      <div className="flex justify-center items-center gap-5 my-4">
        <img
          src={reat}
          className="md:w-12 md:h-12 w-7 h-7  rounded-full p-2 shadow-2xl"
          alt=""
        />
        <img
          src={nodej}
          className="md:w-12 md:h-12 w-7 h-7 rounded-full p-1 shadow-xl"
          alt=""
        />
        <img
          src={tailwind}
          className="md:w-12 md:h-12 w-7 h-7 rounded-full p-1 shadow-xl"
          alt=""
        />
        <img
          src={mongod}
          className="md:w-12 md:h-12 w-7 h-7  rounded-full p-2 shadow-2xl"
          alt=""
        />
        <img
          src={fire}
          className="md:w-12 md:h-12 w-7 h-7 rounded-full p-1 shadow-xl"
          alt=""
        />
      </div>

      <ul className="">
        <li className="flex  items-center gap-2">
          <BiSolidBullseye className="font-bold text-[#16FF00] text-4xl " />
          This website is different type of chinese recipes. In login and
          register page page, user can login and regiter with valid email and
          password.
        </li>
        <li className="flex my-2 items-center gap-2">
          <BiSolidBullseye className="font-bold text-[#16FF00] text-3xl " />
          In home section, there are a header section, about part section,
          different type of chef and footer section also.
        </li>
        <li className="flex  my-2 items-center gap-2 ">
          <BiSolidBullseye className="font-bold text-[#16FF00] text-3xl" />
          In different type of chef section, there are chef's photo, name,
          expricence, Numbers of recipes and view recipe button.
        </li>
        <li className="flex  my-2 items-center gap-2 ">
          <BiSolidBullseye className="font-bold text-[#16FF00] text-5xl " />
          In View recipe button page, there are chef's photo, name, expricence,
          Numbers of recipes also there are recipe name, picture cooking method
          and ingredients.
        </li>
      </ul>
      <div className="flex  gap-4 mt-14 mb-10 items-center ">
        <a
          href="https://chef-recipe-a4415.web.app/"
          className="bg-[#16FF00] font-medium p-2 rounded-lg text-black group-hover:scale-110"
        >
          Live Link
        </a>
        <a
          href="https://github.com/Moonchowdhur/chef-recipe-client"
          className="bg-[#16FF00] font-medium p-2 rounded-lg text-black group-hover:scale-110"
        >
          Client Link
        </a>
        <a
          href="https://github.com/Moonchowdhur/chef-recipe-server"
          className="bg-[#16FF00] p-2 font-medium rounded-lg text-black group-hover:scale-110"
        >
          Server Link
        </a>
      </div>
    </div>
  );
};

export default Secondp;
