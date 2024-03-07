import React from "react";
import "./About.scss";
import { motion } from "framer-motion";

import AboutBgImg from "../../assets/images/aboutBg.png";
import AboutUsImg from "../../assets/images/aboutUsImg.png";
import DownArrowIcon from "../../assets/images/downArrowIcon.png";
import AboutDivider from "../../assets/images/AboutDivider.png";

const About = () => {
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
        <div className="AboutUs__imgWrapper">
          <motion.img
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
            src={AboutUsImg}
            alt="AboutBgImg"
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
