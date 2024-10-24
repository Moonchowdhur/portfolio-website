import React from "react";
import instu4 from "../../assets/instu4.jpg";
import instu3 from "../../assets/instu3.jpg";
import instu2 from "../../assets/instu2.jpg";
import instu1 from "../../assets/instu1.jpg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Secondp from "../Secondp/Secondp";
import Third from "../Third/Third";
import cook1 from "../../assets/cook1.jpg";
import cook2 from "../../assets/cook2.jpg";
import cook3 from "../../assets/cook3.jpg";
import cook4 from "../../assets/cook4.jpg";
import toy1 from "../../assets/toy1.jpg";
import toy2 from "../../assets/toy2.jpg";
import toy3 from "../../assets/toy3.jpg";
import toy4 from "../../assets/toy4.jpg";
import bistro1 from "../../assets/bis1.jpg";
import bistro2 from "../../assets/bis2.jpg";
import bistro3 from "../../assets/bis3.jpg";
import bistro4 from "../../assets/bis4.jpg";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div
      name="projects"
      className="relative bg-gradient-to-b pt-12 px-3 md:px-40 pb-10 from-gray-800 to-black w-full text-white"
    >
      <div>
        <p className="text-4xl mb-8 rounded-2xl border-[#16FF00] font-bold border-b-4  p-2 inline">
          Projects
        </p>
        <p className="py-6 text-lg font-medium">
          These are the projects I've worked with
        </p>
      </div>
      <div name="projects" className=" grid grid-cols-1 md:grid-cols-2  gap-5 ">
        {/* 1st project end */}

        <Third
          title1={" Instrument Academy"}
          img1={instu1}
          img2={instu3}
          img3={instu4}
          img4={instu2}
          client="https://github.com/Moonchowdhur/summary-camp-client"
          server="https://github.com/Moonchowdhur/summary-camp-server"
          live="https://instrument-academy.web.app/"
          u1=" This website is muscial instrument Camp Learning School. In login
          and register page page, user can login and regiter with valid
          email and password."
          u2="In Dashboard section, conditional Dashboard is there, like admin
          dashboard, instructor dashboard and student dashboard."
          u3="In admin Dashboard section, admin can handle users and handle also
          classed by making class approved or denied class."
          u4="In instructor Dashboard section, instructor can add or update
          class section and also can checking section is wheather denied or
          approved by admin."
        ></Third>

        {/* 2nd projet */}
        {/* <Secondp></Secondp> */}
        <Third
          title1={"Toy Town"}
          img1={toy1}
          img2={toy2}
          img3={toy3}
          img4={toy4}
          client="https://github.com/Moonchowdhur/toy-market-place-client"
          server="https://github.com/Moonchowdhur/toy-town-server"
          live="https://toy-marketplace-29f59.web.app/"
          u1="This website is different type of dolls like Barbie, Baby Dolls and Amercian girl. In login and register page page, user can login and regiter with valid
          email and password."
          u2="In All toy section, there are all toy's information for every users and here we can go view details for showing specific toys."
          u3="In My toy section, there are toy's information for registered users and here user can update and delete also."
          u4="In Add toy section, registered users can add a toy information like toy name,image,price, qauntity,rating,details."
        ></Third>
        {/* third project start */}

        <Third
          title1={"Cooking Lite"}
          img1={cook1}
          img2={cook2}
          img3={cook3}
          img4={cook4}
          isMongo="true"
          client="https://github.com/Moonchowdhur/chef-recipe-client"
          server="https://github.com/Moonchowdhur/chef-recipe-server"
          live="https://chef-recipe-a4415.web.app/"
          u1="This website is different type of chinese recipes. In login and
          register page page, user can login and regiter with valid email and
          password."
          u2="In home section, there are a header section, about part section,
          different type of chef and footer section also."
          u3="In different type of chef section, there are chef's photo, name,
          expricence, Numbers of recipes and view recipe button."
          u4="In View recipe button page, there are chef's photo, name, expricence,
          Numbers of recipes also there are recipe name, picture cooking method
          and ingredients."
        ></Third>
        {/* end */}
        {/* fourth */}
        {/* <Third
          title1={"Bistro Boss Restaurant"}
          img1={bistro1}
          img2={bistro3}
          img3={bistro2}
          img4={bistro4}
          client="https://github.com/Moonchowdhur/bistro-boss-client"
          server="https://github.com/Moonchowdhur/bistro-boss-server"
          live="https://bistro-boss-restaurant-87872.web.app/"
          u1="This website is different type of foods like pizza, salad, soup, drinks and deserts. In login and register page page, user can login and regiter with valid
          email and password."
          u2="In Dashboard section, conditional Dashboard is there, like admin
          dashboard, and user dashboard."
          u3="In admin Dashboard section, admin can handle users and add or update items also."
          u4="In user Dashboard section, user can add food in their cart, also can payment of food
           and user can check their payment history."
        ></Third> */}
        {/* end */}
      </div>
    </div>
  );
};

export default Project;
