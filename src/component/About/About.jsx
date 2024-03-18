import React from "react";
import "./About.scss";
import { motion, useAnimate } from "framer-motion";

import AboutBgImg from "../../assets/images/aboutBg.png";
import AboutUsImg from "../../assets/images/aboutUsImg.png";
import DownArrowIcon from "../../assets/images/downArrowIcon.png";
import AboutDivider from "../../assets/images/AboutDivider.png";
import SliderImg1 from "../../assets/images/sliderImg2.png";
import SliderImg2 from "../../assets/images/sliderImg3.png";
import SliderImg3 from "../../assets/images/sliderImg5.png";
import SliderImg4 from "../../assets/images/sliderImg6.png";

import Upwealth1 from "../../assets/images/UPWEALTH1.png";
import Upwealth2 from "../../assets/images/UPWEALTH2.png";
import Upwealth3 from "../../assets/images/UPWEALTH3.png";

const About = () => {
  const [scope, animate] = useAnimate();

  // for card-one...
  let xPositionC1, yPositionC1;
  let xPositionC2, yPositionC2;
  let xPositionC3, yPositionC3;
  let xPositionC4, yPositionC4;

  // xPositionC1 = window.innerWidth > 1920 ? '-512%' : '-500%';
  // yPositionC1 = window.innerWidth > 1920 ? '84%' : '50%';
  if (window.innerWidth >= 1921) {
    xPositionC1 = "-512%";
    yPositionC1 = "84%";

    xPositionC2 = "-360%";
    yPositionC2 = "-55%";

    xPositionC3 = "300%";
    yPositionC3 = "-70%";

    xPositionC4 = "552%";
    yPositionC4 = "84%";
  } else if ((window.innerWidth >= 1720) & (window.innerWidth <= 1920)) {
    xPositionC1 = "-560%";
    yPositionC1 = "50%";

    xPositionC2 = "-360%";
    yPositionC2 = "-50%";

    xPositionC3 = "450%";
    yPositionC3 = "-50%";

    xPositionC4 = "580%";
    yPositionC4 = "50%";
  } else {
    xPositionC1 = "-530%";
    yPositionC1 = "60%";

    xPositionC2 = "-330%";
    yPositionC2 = "-50%";

    xPositionC3 = "380%";
    yPositionC3 = "-50%";

    xPositionC4 = "560%";
    yPositionC4 = "60%";
  }

  // for card-two...
  //  xPositionC2 = window.innerWidth > 1920 ? -560 : -300;
  //  yPositionC2 = window.innerWidth > 1920 ? -55 : -100;

  // for card-three...
  // const xPositionC3 = window.innerWidth > 1920 ? 645 : 300;
  // const yPositionC3 = window.innerWidth > 1920 ? -55 : -100;

  // for card-four...
  // const xPositionC4 = window.innerWidth > 1920 ? 960 : 550;
  // const yPositionC4 = window.innerWidth > 1920 ? 224 : 50;

  const handleMouseEnter = async () => {
    // rotate the main-card
    animate("#mainCard", {
      rotateY: "30deg",
    });
    // for transforming the cards...
    animate(".hidden__Card1", {
      x: xPositionC1,
      y: yPositionC1,
    });
    animate(".hidden__Card2", {
      x: xPositionC2,
      y: yPositionC2,
    });
    animate(".hidden__Card3", {
      x: xPositionC3,
      y: yPositionC3,
    });
    await animate(".hidden__Card4", {
      x: xPositionC4,
      y: yPositionC4,
    });

    // for rotate the cards...
    animate(".hidden__Card1", { rotateZ: "5deg" });
    animate(".hidden__Card2", { rotateZ: "-10deg" });
    animate(".hidden__Card3", { rotateZ: "-10deg" });
    animate(".hidden__Card4", { rotateZ: "10deg" });
  };

  return (
    <div className="About__mainWrapper">
      <motion.img
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "backOut",
          delay: 0.5,
        }}
        className="About__BgImg"
        src={AboutBgImg}
        alt="about__bgImg"
      />
      <motion.img
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, delay: 1, ease: "backOut" }}
        src={Upwealth1}
        alt="upwealth1-text"
        className="About__BgUpwealth1"
      />
      <motion.img
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.6, delay: 1, ease: "backOut" }}
        src={Upwealth2}
        alt="upwealth1-text"
        className="About__BgUpwealth2"
      />
      <motion.img
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.8, delay: 1, ease: "backOut" }}
        src={Upwealth3}
        alt="upwealth1-text"
        className="About__BgUpwealth3"
      />
      <div className="About__contentMainWrapper">
        <div ref={scope} className="AboutUs__imgWrapper">
          <motion.img
            id="mainCard"
            initial={{
              scale: 100,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "linear",
            }}
            viewport={{ once: true }}
            onMouseEnter={handleMouseEnter}
            src={AboutUsImg}
            alt="AboutBgImg"
          />

          <motion.img
            initial={{ rotateZ: "20deg" }}
            src={SliderImg3}
            className="hidden__Cards hidden__Card1"
            alt="hidden-card1"
          />
          <motion.img
            initial={{ rotateZ: "40deg" }}
            src={SliderImg2}
            className="hidden__Cards hidden__Card2"
            alt="hidden-card2"
          />
          <motion.img
            initial={{ rotateZ: "-20deg" }}
            src={SliderImg1}
            className="hidden__Cards hidden__Card3"
            alt="hidden-card3"
          />
          <motion.img
            initial={{ rotateZ: "-40deg" }}
            src={SliderImg4}
            className="hidden__Cards hidden__Card4"
            alt="hidden-card4"
          />
        </div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
          className="About__contextMainWrapper"
        >
          <div className="About__contentWrapper">
            <div className="About__contentLeftWrapper">
              <h3>About us</h3>
              <h2>Grow your net worth by growing your network.</h2>
              <img src={AboutDivider} alt="about_dividerImg" />
            </div>
            <div className="About__contentRightWrapper">
              <p>
                UpWealth magazine is a premier magazine for entrepreneurs by
                entrepreneurs. Do you ever wonder how entrepreneurs become
                debt-free and financially free while spending time with their
                loved ones and doing the thing they enjoy? Well, look no
                further. UPWealth has all the answers you need. Read from small
                to large business owners who have mastered the art of creating
                and maintaining business systems, sticking to their visions and
                persisting in their missions!The power of leveraging other
                businesses is unmatched.
              </p>
            </div>
          </div>
          <button
            className="moveToNewSec__Btn"
            aria-description="move-to-the-next-section-button"
          >
            <img src={DownArrowIcon} alt="downArrowIcon" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
