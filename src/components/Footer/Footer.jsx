import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center md:px-64  p-4 bg-black text-neutral-content">
        <div className="items-center grid-flow-col">
          <img
            src="https://i.ibb.co/Sr23tpn/1685604437506.jpg"
            className="w-12 h-14 rounded-full"
            alt=""
          />
          <p>
            Copyright © 2023 - All right reserved by <br />
            <span className="text-slate-300">Kaushani Chowdhury</span>
          </p>
        </div>
        <div className="grid-flow-col mx-auto md:mx-0 gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.linkedin.com/in/kaushani-chowdhury-83a37918a/">
            <BsLinkedin className="text-2xl" />
          </a>
          <a href="https://github.com/Moonchowdhur/">
            <BsGithub className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/meema.chowdhury/?igshid=MzRlODBiNWFlZA%3D%3D">
            <BsInstagram className="text-2xl" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
