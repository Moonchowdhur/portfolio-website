import React from "react";
import instu4 from "../../assets/instu4.jpg";
import instu3 from "../../assets/instu3.jpg";
import instu2 from "../../assets/instu2.jpg";
import instu1 from "../../assets/instu1.jpg";
const First = () => {
  return (
    <div className="border-[#16FF00] border  rounded-2xl shadow-xl p-7">
      <div className="carousel md:w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={instu1} className="w-[700px]" />
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
          <img src={instu3} className="w-[700px]" />
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
          <img src={instu4} className="w-[700px]" />
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
          <img src={instu2} className="w-[700px]" />
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
        Instrument Academy
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
        <li className="flex   items-center gap-2">
          <AiOutlineCheckCircle className="font-bold" />
          This website is muscial instrument Camp Learning School. In login and
          register page page, user can login and regiter with valid email and
          password.
        </li>
        <li className="flex my-2 items-center gap-2">
          <AiOutlineCheckCircle className="font-bold" />
          In Dashboard section, conditional Dashboard is there, like admin
          dashboard, instructor dashboard and student dashboard.
        </li>
        <li className="flex  my-2 items-center gap-2">
          <AiOutlineCheckCircle className="font-bold" />
          In admin Dashboard section, admin can handle users and handle also
          classed by making class approved or denied class.
        </li>
        <li className="flex  my-2 items-center gap-2">
          <AiOutlineCheckCircle className="font-bold" />
          In instructor Dashboard section, instructor can add or update class
          section and also can checking section is wheather denied or approved
          by admin.
        </li>
      </ul>
      <div className="flex  gap-4 mt-6 mb-10 items-center ">
        <a
          href="https://instrument-academy.web.app/"
          className="bg-[#16FF00] font-medium p-2 rounded-lg text-black group-hover:scale-110"
        >
          Live Link
        </a>
        <a
          href="https://github.com/Moonchowdhur/summary-camp-client"
          className="bg-[#16FF00] font-medium p-2 rounded-lg text-black group-hover:scale-110"
        >
          Client Link
        </a>
        <a
          href="https://github.com/Moonchowdhur/summary-camp-server"
          className="bg-[#16FF00] p-2 font-medium rounded-lg text-black group-hover:scale-110"
        >
          Server Link
        </a>
      </div>
    </div>
  );
};

export default First;
