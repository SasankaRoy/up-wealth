import React, { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";
import "./ContactUs.scss";

export const ContactUs = () => {
  const [scope, animate] = useAnimate();
    const [animateOnce,setAnimateOnce] = useState(false);

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
      </div>
    </>
  );
};
