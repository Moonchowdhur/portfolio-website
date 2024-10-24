import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="w-full py-10   bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="md:flex justify-between">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            name="about"
            className="md:w-[60%] mb-5"
          >
            <div className="pb-8">
              <p className="text-4xl p-2 rounded-2xl border-[#16FF00]  font-bold inline border-b-4 ">
                About me
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <h2 className="md:text-5xl text-3xl text-[#16FF00] font-bold tracking-wider">
                I am available for your Project
              </h2>
              <p className="mt-4 ">
                Hello! I'm Kaushani Chowdhury, from Kolkata, India. I am
                dedicated to learning new technologies, and coding has become my
                true passion. I invest a significant amount of time in staying
                up-to-date with the latest trends and honing my skills.My goal
                is to create engaging web applications that enhance user
                application and drive business success. <br />I am eager to
                expand my skills and explore new technologies to bring
                innovative ideas to life. If you have an exciting project in
                mind, I'm all ears! Feel free to explore my resume below to gain
                a better understanding of my skills and experience. Let's
                connect and bring your project to life together!
              </p>
            </motion.div>
          </div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              name="about"
            >
              <img
                src="https://i.ibb.co/Sr23tpn/1685604437506.jpg"
                className="h-[400px] rounded-2xl"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
