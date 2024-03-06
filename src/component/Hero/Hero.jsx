import React, { useRef, useState } from "react";
import "./Hero.scss";
// import gsap from "gsap";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import DownArrowIcon from "../../assets/images/downArrowIcon.png";
import subscribeHoverIcon from "../../assets/images/subscribeHoverIcon.png";
import SliderImg1 from "../../assets/images/sliderImg1.png";
import SliderImg2 from "../../assets/images/sliderImg2.png";
import SliderImg3 from "../../assets/images/sliderImg3.png";
import SliderImg4 from "../../assets/images/sliderImg4.png";
import SliderImg5 from "../../assets/images/sliderImg5.png";
import SliderImg6 from "../../assets/images/sliderImg6.png";

SwiperCore.use([EffectCoverflow]);

const ImageSlider = () => {
  const swiperRef = useRef(null);

  const sliderImageList = [
    SliderImg1,
    SliderImg2,
    SliderImg3,
    SliderImg4,
    SliderImg5,
    SliderImg6,
  ];

  const handleMoveEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={-650}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow]}
        className="sliderImgs__Wrapper"
      >
        {sliderImageList.map((cur, id) => (
          <SwiperSlide key={id} onMouseOver={handleMoveEnter}>
            <img className="slider__CardImage" src={cur} alt="sliderImgs" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const Hero = () => {
  // useEffect(() => {
  //   const textTimeLine = gsap.timeline();

  //   textTimeLine.from("#Hero__heading", {
  //     x: -50,
  //     ease: "power4.out",
  //     delay: 1,
  //     duration: 1,
  //     stagger: {
  //       amount: 0.4,
  //     },
  //   });
  // }, []);
  return (
    <div className="Hero__mainWrapper">
      <div className="Hero__textMainWrapper">
        <div className="Hero__textWrapper">
          <motion.h1
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.3,
              ease: "backOut",
            }}
            id="Hero__heading"
          >
            Discover the latest issue of{" "}
            <span className="unwealth__textColor">unwealth</span>{" "}
            <span className="magazine__textColor">magazine</span>
          </motion.h1>
          <motion.p
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.3,
              ease: "backOut",
            }}
            className="small__informationPara"
          >
            Stay informed with our insightful articles and expert advice.
          </motion.p>

          <motion.div
            initial={{
              y: -50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.3,
              ease: "backOut",
              damping:300
            }}
            className="subscribeAndArrowBtn__Wrapper"
          >
            <button
              className="subscribeNow__Btn"
              aria-description="subscribe-now-button"
            >
              Subscribe Now!
              <img src={subscribeHoverIcon} alt="subscribeHoverIcon" />
            </button>
            <button
              className="moveToNewSec__Btn"
              aria-description="move-to-the-next-section-button"
            >
              <img src={DownArrowIcon} alt="downArrowIcon" />
            </button>
          </motion.div>
        </div>
      </div>
      <div className="Hero__sliderMainWrapper">
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
            duration: 1.3,
            ease: "backOut",
          }}
          className="sliderImgs__mainWrapper"
        >
          <ImageSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
