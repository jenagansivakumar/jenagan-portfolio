import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 20.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[50px] shadow-card"
    >
      <div
        options={{
          max: 100,
          scale: 10,
          speed: 4500,
        }}
        className="bg-tertiary rounded-[300px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-yellow text-[30px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Having recently graduated as a full stack developer from Spiced Academy,
        I've delved into the exhilarating world of web development, sharpening
        my expertise in{" "}
        <span className="text-[20px] text-blue-300 hover:text-white hover:text-[22px]">
          {" "}
          TypeScript
        </span>
        ,
        <span className="text-[20px] text-blue-300 hover:text-white hover:text-[22px]">
          {" "}
          React
        </span>
        ,
        <span className="text-[20px] text-blue-300 hover:text-white hover:text-[22px]">
          {" "}
          Node.js
        </span>
        ,
        <span className="text-[20px] text-blue-300 hover:text-white hover:text-[22px]">
          {" "}
          Three.js
        </span>
        ,
        <span className="text-[20px] text-blue-300 hover:text-white hover:text-[22px]">
          {" "}
          Framer Motion
        </span>
        , &nbsp;and&nbsp;
        <span className="text-[20px] text-blue-300 hover:text-white hover:text-[22px]">
          Next.js
        </span>
        . Lately, I've been captivated by the allure of Solidity and Rust,
        igniting my passion to unlock their full potential. My ultimate mission
        is to utilise my tech skills in constructing a decentralized future that
        empowers individuals and communities alike. If you're seeking a
        <span className="text-[20px] text-blue-100 hover:text-white hover:text-[22px]">
          <a href="#contact"> developer</a>
        </span>
        &nbsp;with a creative edge and an authentic drive to make a difference,
        your search ends here!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
