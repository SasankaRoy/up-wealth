import React from 'react';
import { motion } from 'framer-motion';
import './PreviousEdition.scss';
import PreviousEditionBg from '../../assets/images/previousEditionBg.png';

const PreviousEdition = () => {
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
                <div className='PreviousEdition__outerBottomWrapper'>
                    <button>
                        Previous
                    </button>
                    <div className='PreviousEdition__sliderDiv'>
                        <div>the div  that slides</div>
                        <div>the div  that slides</div>
                        <div>the div  that slides</div>
                        <div>the div  that slides</div>
                    </div>
                    <button>
                        Next
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

export default PreviousEdition