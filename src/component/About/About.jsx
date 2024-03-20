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

import flipCard1 from '../../assets/images/flipCard1.png'
import flipCard2 from '../../assets/images/flipCard2.png'
import flipCard3 from '../../assets/images/flipCard3.png'
import flipCard4 from '../../assets/images/flipCard4.png'

// const FlipCard = ({ frontImage, backImage, uniqueIndentifire }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const flipControls = useAnimation();

//   const handleClickToFlip = () => {
//     setIsFlipped(!isFlipped);

//     flipControls.start({ scale: 1, rotateY: isFlipped ? 0 : 180 });
//   };

//   return (
//     <>
//       <div
//         style={{
//           perspective: 1000,
//         }}
//         className="hidden__Cards"
//       >
//         <motion.div
//           style={{
//             rotateY: isFlipped ? 180 : 0,
//             transformStyle: "preserve-3d",
//           }}
//           animate={flipControls}
//         >
//           <motion.img
//             style={{
//               width: "100%",
//               height: "100%",
//               zIndex: isFlipped ? -1 : 1,
//             }}
//             className="hidden__Card1"
//             src={frontImage}
//             alt="frontImg"
//           />
//           <motion.img
//             style={{
//               width: "100%",
//               height: "100%",
//               zIndex: isFlipped ? 1 : -1,
//             }}
//             className="hidden__Card1"
//             src={backImage}
//             alt="backImg"
//           />
//         </motion.div>
//       </div>
//     </>
//   );
// };

const About = () => {
  // const [isFlipped, setIsFlipped] = useState(false);
  // const [indentifire, setIndentifire] = useState("");
  const [scope, animate] = useAnimate();

  const documentPresentWidth = window.innerWidth;

  // for cards X and Y position...
  let xPositionC1, yPositionC1;
  let xPositionC2, yPositionC2;
  let xPositionC3, yPositionC3;
  let xPositionC4, yPositionC4;

  if (documentPresentWidth >= 1921) {
    xPositionC1 = "-512%";
    yPositionC1 = "84%";

    xPositionC2 = "-360%";
    yPositionC2 = "-55%";

    xPositionC3 = "300%";
    yPositionC3 = "-70%";

    xPositionC4 = "552%";
    yPositionC4 = "84%";
  } else if ((documentPresentWidth >= 1720) & (documentPresentWidth <= 1920)) {
    xPositionC1 = "-560%";
    yPositionC1 = "50%";

    xPositionC2 = "-360%";
    yPositionC2 = "-50%";

    xPositionC3 = "450%";
    yPositionC3 = "-50%";

    xPositionC4 = "580%";
    yPositionC4 = "50%";
  } else if ((documentPresentWidth >= 1620) & (documentPresentWidth <= 1719)) {
    xPositionC1 = "-540%";
    yPositionC1 = "50%";

    xPositionC2 = "-360%";
    yPositionC2 = "-50%";

    xPositionC3 = "420%";
    yPositionC3 = "-50%";

    xPositionC4 = "560%";
    yPositionC4 = "50%";
  } else if ((documentPresentWidth >= 1520) & (documentPresentWidth <= 1619)) {
    xPositionC1 = "-580%";
    yPositionC1 = "60%";

    xPositionC2 = "-380%";
    yPositionC2 = "-50%";

    xPositionC3 = "380%";
    yPositionC3 = "-50%";

    xPositionC4 = "580%";
    yPositionC4 = "60%";
  } else if ((documentPresentWidth >= 1420) & (documentPresentWidth <= 1519)) {
    xPositionC1 = "-580%";
    yPositionC1 = "60%";

    xPositionC2 = "-380%";
    yPositionC2 = "-50%";

    xPositionC3 = "380%";
    yPositionC3 = "-50%";

    xPositionC4 = "580%";
    yPositionC4 = "60%";
  } else if ((documentPresentWidth >= 1320) & (documentPresentWidth <= 1419)) {
    xPositionC1 = "-580%";
    yPositionC1 = "70%";

    xPositionC2 = "-380%";
    yPositionC2 = "-50%";

    xPositionC3 = "400%";
    yPositionC3 = "-50%";

    xPositionC4 = "580%";
    yPositionC4 = "70%";
  } else {
    xPositionC1 = "-500%";
    yPositionC1 = "60%";

    xPositionC2 = "-330%";
    yPositionC2 = "-50%";

    xPositionC3 = "380%";
    yPositionC3 = "-50%";

    xPositionC4 = "560%";
    yPositionC4 = "60%";
  }

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

  // const handleClickToFlip = (e) => {
  //   const clickedCardClassName = e.target.className;
  //   setIsFlipped(!isFlipped);
  //   setIndentifire(clickedCardClassName);
  //   animate(`.${clickedCardClassName}`, {
  //     rotateY: isFlipped ? 0 : 180,
  //   });
  // };

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
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </motion.div>

          {/* <motion.img
            initial={{ rotateZ: "40deg" }}
            src={SliderImg3}
            className="hidden__Cards hidden__Card1"
            alt="hidden-card1"
          /> */}

          {/* <div className="hidden__Cards">
            <motion.div
              style={{
                height: "100%",
                width: "100%",
                // perspective: 1000,
              }}
            >
              <motion.div
                style={{
                  height: "100%",
                  width: "100%",
                  // rotateY: isFlipped ? 180 : 0,
                  // transformStyle: "preserve-3d",
                }}
              >
                <motion.img
                  initial={{ rotateZ: "20deg" }}
                  src={
                    isFlipped || indentifire === "hidden__Card2"
                      ? SliderImg2
                      : SliderImg1
                  }
                  className="hidden__Card2"
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: isFlipped ? -1 : 1,
                  }}
                  onClick={handleClickToFlip}
                  alt="hidden-card2"
                />
              </motion.div>
            </motion.div>
          </div> */}

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
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="flip-card-back">
                <motion.img
                  src={flipCard2}
                  alt="Avatar"
                  className=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </motion.div>

          {/* <motion.img
            initial={{ rotateZ: "40deg" }}
            src={SliderImg2}
            className="hidden__Cards hidden__Card2"
            alt="hidden-card2"
          /> */}

          {/* <div className="hidden__Cards">
            <motion.div
              style={{
                height: "100%",
                width: "100%",
                // perspective: 1000,
              }}
            >
              <motion.div
                style={{
                  height: "100%",
                  width: "100%",
                  // rotateY: isFlipped ? 180 : 0,
                  // transformStyle: "preserve-3d",
                }}
              >
                <motion.img
                  initial={{ rotateZ: "20deg" }}
                  src={
                    isFlipped || indentifire === "hidden__Card3"
                      ? SliderImg1
                      : SliderImg3
                  }
                  className="hidden__Card3"
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: isFlipped ? -1 : 1,
                  }}
                  onClick={handleClickToFlip}
                  alt="hidden-card3"
                />
              </motion.div>
            </motion.div>
          </div> */}

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
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="flip-card-back">
                <motion.img
                  src={flipCard3}
                  alt="Avatar"
                  className=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </motion.div>

          {/* <motion.img
            initial={{ rotateZ: "-20deg" }}
            src={SliderImg1}
            className="hidden__Cards hidden__Card3"
            alt="hidden-card3"
          /> */}

          {/* <div className="hidden__Cards">
            <motion.div
              style={{
                height: "100%",
                width: "100%",
                // perspective: 1000,
              }}
            >
              <motion.div
                style={{
                  height: "100%",
                  width: "100%",
                  // rotateY: isFlipped ? 180 : 0,
                  // transformStyle: "preserve-3d",
                }}
              >
                <motion.img
                  initial={{ rotateZ: "20deg" }}
                  src={
                    isFlipped || indentifire === "hidden__Card4"
                      ? SliderImg4
                      : SliderImg1
                  }
                  className="hidden__Card4"
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: isFlipped ? -1 : 1,
                  }}
                  onClick={handleClickToFlip}
                  alt="hidden-card4"
                />
              </motion.div>
            </motion.div>
          </div> */}

          <motion.div initial={{ rotateZ: "-40deg" }}  className="flip-card hidden__Card4">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <motion.img
                  src={SliderImg4}
                  alt="Avatar"
                  className=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="flip-card-back">
                <motion.img
                  src={flipCard4}
                  alt="Avatar"
                  className=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </motion.div>

          {/* <motion.img
            initial={{ rotateZ: "-40deg" }}
            src={SliderImg4}
            className="hidden__Cards hidden__Card4"
            alt="hidden-card4"
          /> */}
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

{
  /* <div onClick={handleClickToFlip}>
        <motion.div
          style={{
            perspective: 1000,
          }}
        >
          <motion.div
            style={{
              rotateY: isFlipped ? 180 : 0,
              transformStyle: "preserve-3d",
            }}
            animate={flipControls}
          >
            <motion.img
              className="hidden__Cards hidden__Card1"
              src={frontImage}
              style={{
                zIndex: isFlipped ? -1 : 1,
              }}
            />
            <motion.img
              className="hidden__Cards hidden__Card1"
              src={backImage}
              style={{
                zIndex: isFlipped ? 1 : -1,
                rotateY: 180,
              }}
            />
          </motion.div>
        </motion.div>
      </div> */
}
