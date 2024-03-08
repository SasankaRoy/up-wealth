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

const About = () => {
  const [scope, animate] = useAnimate();

  // for card-one...
  const xPositionC1 = window.innerWidth > 1920 ? -912 : -550;
  const yPositionC1 = window.innerWidth > 1920 ? 224 : 50;

  // for card-two...
  const xPositionC2 = window.innerWidth > 1920 ? -560 : -300;
  const yPositionC2 = window.innerWidth > 1920 ? -55 : -100;

  // for card-three...
  const xPositionC3 = window.innerWidth > 1920 ? 645 : 300;
  const yPositionC3 = window.innerWidth > 1920 ? -55 : -100;

  // for card-four...
  const xPositionC4 = window.innerWidth > 1920 ? 960 : 550;
  const yPositionC4 = window.innerWidth > 1920 ? 224 : 50;

  const handleMouseEnter = async () => {
    // rotate the main-card
    animate("#mainCard", {
      rotateY: "25deg",
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
