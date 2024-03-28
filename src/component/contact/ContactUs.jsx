import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import "./ContactUs.scss";

export const ContactUs = () => {
  const [scope, animate] = useAnimate();
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
      { backgroundColor: 'red' },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_63",
      { backgroundColor: 'red' },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_83",
      { backgroundColor: 'red' },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_103",
      { backgroundColor: 'red' },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_123",
      { backgroundColor: 'red' },
      { duration: 0.8, times: timings }
    );

    animate(
        "#gridTile_124",
        { backgroundColor: 'red' },
        { duration: 0.8, times: timings }
      );

    animate(
      "#gridTile_125",
      { backgroundColor: 'red' },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_106",
      { backgroundColor: 'red' },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_126",
      { backgroundColor: 'red' },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_86",
      { backgroundColor: 'red' },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_66",
      { backgroundColor: 'red' },
      { duration: 0.8, times: timings }
    );

    animate(
      "#gridTile_46",
      { backgroundColor: 'red' },
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
      "#gridTile_70",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_90",
      { backgroundColor: firstBgColors },
      { duration: 0.8, times: timings }
    );
    animate(
      "#gridTile_89",
      { backgroundColor:firstBgColors},
      { duration: 0.8, times: timings }
    );
  };

  useEffect(() => {
    onPageLoadAnimtion();
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
