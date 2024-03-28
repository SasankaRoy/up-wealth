import React, { useEffect, useState } from "react";
import { useAnimate,motion } from "framer-motion";
import "./ContactUs.scss";

export const ContactUs = () => {
  const [scope, animate] = useAnimate();
  const [animateOnce, setAnimateOnce] = useState(false);

  const firstBgColors = ["#C5DAFF", "#C5DAFF", "#F0F0F3"];
  const timings = [0.1, 0.5, 1];

  const onPageLoadAnimtion = async () => {
    const minValue = 20;
    const maxValue = 150;

    // randow tile change bg--color on page-load....

    const randomNumber = (min, max) =>
      Math.round(Math.random() * (max - min) + min);

    animate(
      `#gridTile_${randomNumber(minValue, maxValue)}`,
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      `#gridTile_${randomNumber(minValue, maxValue)}`,
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      `#gridTile_${randomNumber(minValue, maxValue)}`,
      { backgroundColor: firstBgColors },
      { duration: 0.7, times: timings }
    );
    animate(
      `#gridTile_${randomNumber(minValue, maxValue)}`,
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      `#gridTile_${randomNumber(minValue, maxValue)}`,
      { backgroundColor: firstBgColors },
      { duration: 0.9, times: timings }
    );
    animate(
      `#gridTile_${randomNumber(minValue, maxValue)}`,
      { backgroundColor: firstBgColors },
      { duration: 0.7, times: timings }
    );
    animate(
      `#gridTile_${randomNumber(minValue, maxValue)}`,
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      `#gridTile_${randomNumber(minValue, maxValue)}`,
      { backgroundColor: firstBgColors },
      { duration: 0.9, times: timings }
    );
    animate(
      `#gridTile_${randomNumber(minValue, maxValue)}`,
      { backgroundColor: firstBgColors },
      { duration: 0.7, times: timings }
    );
    await animate(
      `#gridTile_${randomNumber(minValue, maxValue)}`,
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );

    // Up text with animation...

    // for the big "U" ...
    animate(
      "#gridTile_43",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_63",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_83",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_103",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_123",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_124",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_125",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_106",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_126",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_86",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_66",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_46",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );

    // for the big "P"....

    animate(
      "#gridTile_48",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_68",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_88",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_108",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_128",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_49",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_50",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_51",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_71",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_90",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_91",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_89",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
  };

  useEffect(() => {
    onPageLoadAnimtion();

    const handleScroll = () => {
      const scrollPosition = window.scrollY >= 2533;
      if (!scrollPosition || animateOnce) {
        onPageLoadAnimtion();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Contact__outerWrapper">
        {/* grid div start */}
        <div ref={scope} className="Contact__BgGridWrapper">
          {Array(155)
            .join()
            .split(",")
            .map((cur, id) => (
              <div
                key={id}
                id={`gridTile_${id}`}
                className="Contact__gridChildDiv"
              />
            ))}
        </div>
        {/* grid div end */}

        <div className="Contact__wrapper">
          <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{duration:.8,ease:'backOut',delay:1.5}} className='Contact__mainWrapper'>
            <h2 className="Contact__titleH2">Contact our friendly team</h2>
            <p className="Contact__smallPara">Let us know how we can help</p>
            
            <div className="Contact__InputMainWrapper">
                <div className="Contact__InputsWrapper">
                    <div>
                        <input className="" placeholder="First Name" />
                    </div>
                    <div>
                        <input className="" placeholder="Last Name" />
                    </div>
                </div>

                <div className="Contact__InputsWrapper">
                    <div>
                        <input className="" placeholder="Phone number" />
                    </div>
                    <div>
                        <input className="" placeholder="Email ID" />
                    </div>
                </div>

                <div className="Contact__textAreaWrapper">
                    <textarea rows='7' placeholder="Message"></textarea>
                </div>


                <div className="Contact__submitBtnWrapper">
                    <button>Submit</button>
                </div>

            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
