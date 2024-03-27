import React, { useState } from "react";
import "./About.scss";
import { motion, useAnimate, useAnimation } from "framer-motion";

// Images.....
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

import flipCard1 from "../../assets/images/flipCard1.png";
import flipCard2 from "../../assets/images/flipCard2.png";
import flipCard3 from "../../assets/images/flipCard3.png";
import flipCard4 from "../../assets/images/flipCard4.png";

const About = () => {
  const [scope, animate] = useAnimate();

  const documentPresentWidth = window.innerWidth;

  // for cards X and Y position...
  let xPositionC1, yPositionC1;
  let xPositionC2, yPositionC2;
  let xPositionC3, yPositionC3;
  let xPositionC4, yPositionC4;

  // if (documentPresentWidth >= 1921) {
  //   xPositionC1 = "-620%";
  //   yPositionC1 = "84%";

  //   xPositionC2 = "-360%";
  //   yPositionC2 = "-65%";

  //   xPositionC3 = "400%";
  //   yPositionC3 = "-70%";

  //   xPositionC4 = "650%";
  //   yPositionC4 = "84%";
  // } else if ((documentPresentWidth >= 1720) & (documentPresentWidth <= 1920)) {
  //   xPositionC1 = "-620%";
  //   yPositionC1 = "90%";

  //   xPositionC2 = "-420%";
  //   yPositionC2 = "-35%";

  //   xPositionC3 = "440%";
  //   yPositionC3 = "-50%";

  //   xPositionC4 = "660%";
  //   yPositionC4 = "90%";
  // } else if ((documentPresentWidth >= 1620) & (documentPresentWidth <= 1719)) {
  //   xPositionC1 = "-600%";
  //   yPositionC1 = "85%";

  //   xPositionC2 = "-360%";
  //   yPositionC2 = "-55%";

  //   xPositionC3 = "420%";
  //   yPositionC3 = "-55%";

  //   xPositionC4 = "630%";
  //   yPositionC4 = "85%";
  // } else if ((documentPresentWidth >= 1520) & (documentPresentWidth <= 1619)) {
  //   xPositionC1 = "-580%";
  //   yPositionC1 = "60%";

  //   xPositionC2 = "-380%";
  //   yPositionC2 = "-50%";

  //   xPositionC3 = "380%";
  //   yPositionC3 = "-50%";

  //   xPositionC4 = "580%";
  //   yPositionC4 = "60%";
  // } else if ((documentPresentWidth >= 1420) & (documentPresentWidth <= 1519)) {
  //   xPositionC1 = "-500%";
  //   yPositionC1 = "60%";

  //   xPositionC2 = "-310%";
  //   yPositionC2 = "-50%";

  //   xPositionC3 = "310%";
  //   yPositionC3 = "-50%";

  //   xPositionC4 = "500%";
  //   yPositionC4 = "60%";
  // } else if ((documentPresentWidth >= 1320) & (documentPresentWidth <= 1419)) {
  //   xPositionC1 = "-500%";
  //   yPositionC1 = "80%";

  //   xPositionC2 = "-330%";
  //   yPositionC2 = "-50%";

  //   xPositionC3 = "400%";
  //   yPositionC3 = "-50%";

  //   xPositionC4 = "580%";
  //   yPositionC4 = "80%";
  // } else {
  //   xPositionC1 = "-500%";
  //   yPositionC1 = "60%";

  //   xPositionC2 = "-330%";
  //   yPositionC2 = "-50%";

  //   xPositionC3 = "380%";
  //   yPositionC3 = "-50%";

  //   xPositionC4 = "560%";
  //   yPositionC4 = "60%";
  // }

  const handleMouseEnter = async () => {
    // rotate the main-card
    animate("#mainCard", {
      rotateY: "30deg",
    });
    // for transforming the cards...
    animate(".hidden__Card1", {
      // x: xPositionC1,
      // y: yPositionC1,
      x: "-570%",
      y: "85%",
    });
    animate(".hidden__Card2", {
      // x: xPositionC2,
      // y: yPositionC2,
      x: "-400%",
      y: "-100%",
    });
    animate(".hidden__Card3", {
      // x: xPositionC3,
      // y: yPositionC3,
      x: "400%",
      y: "-100%",
    });
    await animate(".hidden__Card4", {
      // x: xPositionC4,
      // y: yPositionC4,
      x: "570%",
      y: "85%",
    });

    // for rotate the cards...
    animate(".hidden__Card1", { rotateZ: "5deg" });
    animate(".hidden__Card2", { rotateZ: "-10deg" });
    animate(".hidden__Card3", { rotateZ: "-10deg" });
    animate(".hidden__Card4", { rotateZ: "10deg" });
  };

  return (
    <>
      <div className="About__wrapper">
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
            transition={{ duration: 1, delay: 0.8, ease: "backOut" }}
            src={Upwealth1}
            alt="upwealth1-text"
            className="About__BgUpwealth1"
          />

          <motion.img
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8, delay: 1.4, ease: "backOut" }}
            src={Upwealth2}
            alt="upwealth1-text"
            className="About__BgUpwealth2"
          />
          <motion.img
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.2, delay: 1.8, ease: "backOut" }}
            src={Upwealth3}
            alt="upwealth1-text"
            className="About__BgUpwealth3"
          />
          <div className="About__imageAndContentWrapper">
            <div ref={scope} className="About__imageWrapper">
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

              <motion.div
                initial={{ rotateZ: "40deg" }}
                className="flip-card hidden__Card1"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <motion.img
                      src={SliderImg2}
                      alt="Avatar"
                      className=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <motion.img
                      src={flipCard1}
                      alt="Avatar"
                      className=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ rotateZ: "40deg" }}
                className="flip-card hidden__Card2"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <motion.img
                      src={SliderImg3}
                      alt="Avatar"
                      className=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <motion.img
                      src={flipCard2}
                      alt="Avatar"
                      className=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flip-card hidden__Card3"
                initial={{ rotateZ: "-20deg" }}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <motion.img
                      src={SliderImg1}
                      alt="Avatar"
                      className=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <motion.img
                      src={flipCard3}
                      alt="Avatar"
                      className=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ rotateZ: "-40deg" }}
                className="flip-card hidden__Card4"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <motion.img
                      src={SliderImg4}
                      alt="Avatar"
                      className=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <motion.img
                      src={flipCard4}
                      alt="Avatar"
                      className=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "backOut", delay: 1 }}
              className="About__mainContentWrapper"
            >
              <div className="About__contentWrapper">
                <div className="About__titleAndSubtitleWrapper">
                  <h3>About us</h3>
                  <h2>Grow your net worth by growing your network.</h2>
                </div>

                <div className="About__titleSperator">
                  <img src={AboutDivider} alt="about_dividerImg" />
                </div>

                <div className="About__shortInfoWrapper">
                  <p>
                    UpWealth magazine is a premier magazine for entrepreneurs by
                    entrepreneurs. Do you ever wonder how entrepreneurs become
                    debt-free and financially free while spending time with
                    their loved ones and doing the thing they enjoy? Well, look
                    no further. UPWealth has all the answers you need. Read from
                    small to large business owners who have mastered the art of
                    creating and maintaining business systems, sticking to their
                    visions and persisting in their missions!The power of
                    leveraging other businesses is unmatched.
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
      </div>
    </>
  );
};

export default About;

{
  /* <div className="About__mainWrapper">
    
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

        <motion.div
          initial={{ rotateZ: "40deg" }}
          className="flip-card hidden__Card1"
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <motion.img
                src={SliderImg2}
                alt="Avatar"
                className=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="flip-card-back">
              <motion.img
                src={flipCard1}
                alt="Avatar"
                className=""
                style={{ width: "100%", height: "100%",objectFit:'cover' }}
              />
            </div>
          </div>
        </motion.div>



        <motion.div
          initial={{ rotateZ: "40deg" }}
          className="flip-card hidden__Card2"
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <motion.img
                src={SliderImg3}
                alt="Avatar"
                className=""
                style={{ width: "100%", height: "100%",objectFit:'cover' }}
              />
            </div>
            <div className="flip-card-back">
              <motion.img
                src={flipCard2}
                alt="Avatar"
                className=""
                style={{ width: "100%", height: "100%",objectFit:'cover' }}
              />
            </div>
          </div>
        </motion.div>

        


        <motion.div
          className="flip-card hidden__Card3"
          initial={{ rotateZ: "-20deg" }}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <motion.img
                src={SliderImg1}
                alt="Avatar"
                className=""
                style={{ width: "100%", height: "100%",objectFit:'cover' }}
              />
            </div>
            <div className="flip-card-back">
              <motion.img
                src={flipCard3}
                alt="Avatar"
                className=""
                style={{ width: "100%", height: "100%",objectFit:'cover' }}
              />
            </div>
          </div>
        </motion.div>

      

       

        <motion.div initial={{ rotateZ: "-40deg" }}  className="flip-card hidden__Card4">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <motion.img
                src={SliderImg4}
                alt="Avatar"
                className=""
                style={{ width: "100%", height: "100%",objectFit:'cover' }}
              />
            </div>
            <div className="flip-card-back">
              <motion.img
                src={flipCard4}
                alt="Avatar"
                className=""
                style={{ width: "100%", height: "100%",objectFit:'cover' }}
              />
            </div>
          </div>
        </motion.div>

     
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
  </div> */
}
