import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PreviousEdition.scss';
import PreviousEditionBg from '../../assets/images/previousEditionBg.png';

import SliderImg1 from "../../assets/images/sliderImg1.png";
import SliderImg2 from "../../assets/images/sliderImg2.png";
import SliderImg3 from "../../assets/images/sliderImg3.png";
import SliderImg4 from "../../assets/images/sliderImg4.png";
import SliderImg5 from "../../assets/images/sliderImg5.png";

import DownArrowIcon from "../../assets/images/downArrowIcon.png";
import NextArrowIcon from "../../assets/images/nextArrow.png";
import PreviousArrowIcon from "../../assets/images/preArrow.png";

const PreviousEdition = () => {
    const [startIndex, setStartIndex] = useState(0);

    const handleNextClick = () => {
        const nextIndex = startIndex + 4;
        if (nextIndex < images.length) {
            setStartIndex(nextIndex);
        }
    };

    const handlePrevClick = () => {
        const prevIndex = startIndex - 4;
        if (prevIndex >= 0) {
            setStartIndex(prevIndex);
        }
    }


    const images = [
        SliderImg1,
        SliderImg2,
        SliderImg3,
        SliderImg4,
        SliderImg5,
        // SliderImg6,
    ];
    return (
        <div className='PreviousEdition__outerWrapper'>

            <motion.img initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .3, ease: 'backOut', delay: .4 }} className='previousEditionBg' src={PreviousEditionBg} alt='Previous-Edition-background-Image' />

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .8, ease: 'backOut', delay: .5 }} className='PreviousEdition__mainWrapper'>
                <div className='PreviousEdition__topOuterWrapper'>
                    <div className='PreviousEdition__topDivLeftWrapper'>
                        <motion.h3 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: 'backOut', delay: .5 }} className='PreviousEdition__topDivSubtitle'>Previous editions</motion.h3>
                        <motion.h2 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: 'backOut', delay: .8 }} className='PreviousEdition__topDivTitle'>Explore all the  magazine issues available for purchase.</motion.h2>
                    </div>
                    <div className='PreviousEdition__topDivRightWrapper'>
                        <motion.button initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .6, ease: 'backOut', delay: .1 }} className='PreviousEdition__viewAllBtn'>View All Editions</motion.button>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: 'backOut', delay: .3 }} className='PreviousEdition__outerBottomWrapper'>
                    <button className='navigationArrowBtns' disabled={startIndex === 0} onClick={handlePrevClick}>
                        <img src={PreviousArrowIcon} alt='previous-arrow-icon' />
                    </button>
                    <div className='PreviousEdition__sliderDiv'>
                        <div className="image-slider">
                            <div className="image-slider-container">
                                {images.slice(startIndex, startIndex + 4).map((image, index) => (
                                    <div key={index} className="image-card">
                                        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .8, ease: 'backIn', delay: .7 }} src={image} alt={`Image ${startIndex + index}`} />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                    <button className='navigationArrowBtns' disabled={startIndex + 4 >= images.length} onClick={handleNextClick}>
                        <img src={NextArrowIcon} alt='next-arrow-icon' />
                    </button>
                </motion.div>
                <div className='PreviousEdition__nextSectionBtnWrapper'>
                    <button
                        className="moveToNewSec__Btn"
                    // aria-description="move-to-the-next-section-button"
                    >
                        <img src={DownArrowIcon} alt="downArrowIcon" />
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

export default PreviousEdition