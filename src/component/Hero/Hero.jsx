import React, { useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";

import "./Hero.scss";

// swiper's css files.....
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// Images...
import DownArrowIcon from "../../assets/images/downArrowIcon.png";
import subscribeHoverIcon from "../../assets/images/subscribeHoverIcon.png";
import SliderImg1 from "../../assets/images/sliderImg2.1.png";
import SliderImg2 from "../../assets/images/sliderImg2.2.png";
import SliderImg3 from "../../assets/images/sliderImg2.3.png";
import SliderImg4 from "../../assets/images/sliderImg2.4.png";
import SliderImg5 from "../../assets/images/sliderImg2.5.png";

// import CropedsliderImg2 from "../../assets/images/CropedsliderImg2.1.png";

SwiperCore.use([EffectCoverflow]);

const ImageSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const autoSlider = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
    const sliderInerval = setInterval(autoSlider,2000);


    return ()=> clearInterval(sliderInerval);
  }, []);

  const sliderImageList = [
    SliderImg1,
    SliderImg2,
    SliderImg3,
    SliderImg4,
    SliderImg5,
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
        slidesPerView={"auto"}
        spaceBetween={-750}        
        loop="true"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1.3,
        }}
        breakpoints={{
          1920: {
            spaceBetween: -690,
          },
          1820: {
            spaceBetween: -670,
          },
          1720: {
            spaceBetween: -650,
          },
          1620: {
            spaceBetween: -600,
          },
          1520: {
            spaceBetween: -520,
          },
          1420: {
            spaceBetween: -520,
          },
          1320: {
            spaceBetween: -450,
          },
          1220: {
            spaceBetween: -430,
          },
          1120: {
            spaceBetween: -410,
          },
          1020: {
            spaceBetween: -400,
          },
        }}
        modules={[EffectCoverflow]}
        className="sliderImgs__Wrapper"
      >
        {sliderImageList.map((cur, id) => (
          <SwiperSlide
            className={`slider__ImageWrapper slider__Image_${id++}`}
            key={id}
            onMouseOver={handleMoveEnter}
          >
            <img className="slider__CardImage" src={cur} alt="sliderImgs" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const Hero = () => {
  // const [mouseEnter, setMouseEnter] = useState(false);
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

  // const handleMoveEnter = () => {
  //   // console.log('mouse enter the image cards slider')
  //   setMouseEnter(true);
  // };
  return (
    <div className="Hero__mainWrapper">
      <div className="Hero__mainContentWrapper">
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
              <span className="upwealth__textColor">upwealth</span>{" "}
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
                damping: 300,
              }}
              className="subscribeAndArrowBtn__Wrapper"
            >
              <button className="subscribeNow__Btn">
                Subscribe Now!
                <img src={subscribeHoverIcon} alt="subscribeHoverIcon" />
              </button>
              <button className="moveToNewSec__Btn">
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
            {/* <section id="slider">
            <input type="radio" name="slider" id="s1" checked />
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" />
            <input type="radio" name="slider" id="s4" />
            <input type="radio" name="slider" id="s5" />

            <label onMouseEnter={handleMoveEnter} for="s1" id="slide1">
              <img src={SliderImg1} alt="" />
            </label>
            <label onMouseEnter={handleMoveEnter} for="s2" id="slide2">
              <img src={SliderImg2} alt="" />
            </label>
            <label onMouseEnter={handleMoveEnter} for="s3" id="slide3">
              <img src={SliderImg3} alt="" />
            </label>
            <label onMouseEnter={handleMoveEnter} for="s4" id="slide4">
              <img src={SliderImg4} alt="" />
            </label>
            <label onMouseEnter={handleMoveEnter} for="s5" id="slide5">
              <img src={SliderImg5} alt="" />
            </label>
          </section> */}

            <ImageSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
