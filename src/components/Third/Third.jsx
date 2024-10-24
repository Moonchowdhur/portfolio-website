import React, { useState } from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import bootstrap from "../../assets/boots.png";
import tailwind from "../../assets/tailwind.png";
import js from "../../assets/jas.png";
import reat from "../../assets/react.png";
import nodej from "../../assets/node.png";
import mongod from "../../assets/mongo.png";
import fire from "../../assets/firee.png";
import { BiSolidBullseye } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const Third = ({
  img1,
  img2,
  img3,
  img4,
  client,
  server,
  live,
  u1,
  u2,
  u3,
  u4,
  title1,
  isMongo,
}) => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const images = [img1, img2, img3, img4]; // Replace img1, img2, img3, and img4 with your actual image variables or paths

  // const handlePrevSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === 0 ? images.length - 1 : prevSlide - 1
  //   );
  // };

  // const handleNextSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === images.length - 1 ? 0 : prevSlide + 1
  //   );
  // };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      name="about"
      className="border-[#16FF00] border relative  rounded-2xl shadow-xl p-7"
    >
      {/* chat gpt start */}
      {/* <div className="carousel md:w-full">
        {images.map((image, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className={`carousel-item relative w-full ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img src={image} className="w-[700px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? images.length : index}`}
                className="btn btn-circle"
                onClick={handlePrevSlide}
              >
                ❮
              </a>
              <a
                href={`#slide${index === images.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle"
                onClick={handleNextSlide}
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div> */}
      {/* chat gpt end */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
      </Swiper>
      {/* <div className="carousel md:w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-[700px]" />
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
          <img src={img2} className="w-[700px]" />
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
          <img src={img3} className="w-[700px]" />
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
          <img src={img4} className="w-[700px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}
      <h2 className="my-6 text-[#16FF00] md:text-3xl tracking-wide font-bold">
        {title1}
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
        {isMongo ? (
          ""
        ) : (
          <img
            src={mongod}
            className="md:w-12 md:h-12 w-7 h-7  rounded-full p-2 shadow-2xl"
            alt=""
          />
        )}

        <img
          src={fire}
          className="md:w-12 md:h-12 w-7 h-7 rounded-full p-1 shadow-xl"
          alt=""
        />
      </div>
      {/* end */}
      <ul className="">
        <li className="flex  items-center gap-2">
          <BiSolidBullseye className="font-bold text-[#16FF00] text-4xl " />
          {u1}
        </li>
        <li className="flex my-2 items-center gap-2">
          <BiSolidBullseye className="font-bold text-[#16FF00] text-3xl " />
          {u2}
        </li>
        <li className="flex  my-2 items-center gap-2 ">
          <BiSolidBullseye className="font-bold text-[#16FF00] text-3xl" />
          {u3}
        </li>
        <li className="flex  my-2 items-center gap-2 ">
          <BiSolidBullseye className="font-bold text-[#16FF00] text-5xl " />
          {u4}
        </li>
      </ul>
      <div className="flex  gap-4 mt-14 mb-10 items-center ">
        <a
          href={live}
          className="bg-[#16FF00] md:absolute md:bottom-4 md:right-7 font-medium p-2 rounded-lg text-black group-hover:scale-110"
        >
          Live Link
        </a>
        <a
          href={client}
          className="bg-[#16FF00] md:absolute  md:bottom-4 md:right-48 font-medium p-2 rounded-lg text-black group-hover:scale-110"
        >
          Client Link
        </a>
        <a
          href={server}
          className="bg-[#16FF00] p-2 md:absolute md:bottom-4  font-medium rounded-lg text-black group-hover:scale-110"
        >
          Server Link
        </a>
      </div>
    </div>
  );
};

export default Third;
