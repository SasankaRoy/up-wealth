import React from 'react';
import { motion } from 'framer-motion';
import './NewRelease.scss';
import NewReleaseBg from '../../assets/images/newRelease.png'
import NewReleaseCardImg from '../../assets/images/newReleaseCardImg.png'
import DownArrowIcon2 from '../../assets/images/downArrowIcon2.png'

const NewRelease = () => {
    return (
        <motion.div initial={{
            opacity: 0, y: -250, x: -500, scale: 0
        }} whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }} transition={{ duration: 1.2, ease: 'easeInOut' }} className='NewRelease__containerWrapper'>
            <motion.img className='newReleaseText__bg' initial={{
                y: 100,
                opacity: 0
            }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: 'backOut', delay: 1.8 }} src={NewReleaseBg} alt='new release' />

            <div className='NewRelease__contentMainWrapper'>
                <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .7, ease: 'backOut', delay: 1.5 }} className='NewRelease__contentImageWrapper'>
                    <div className='NewRelease__ImageWrapper'>

                        <img src={NewReleaseCardImg} alt='new-release-cardImg' />
                    </div>
                </motion.div>
                <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .7, ease: 'backOut', delay: 1.5 }} className='NewRelease__textContentWrapper'>
                    <h3 className='NewRelease__subTitle'>New Release</h3>
                    <h2 className='NewRelease__title'>This is</h2>

                    <div className='NewRelease__infoWrapper'>
                        <p>
                            “If your heart is in your dream, no request is too extreme”
                        </p>
                        <h3>-Jiminy Cricket.</h3>
                        <p>
                            Subscribe today and learn how to bring your dreams to life and grow your profit margins.
                        </p>
                    </div>
                    <div className='NewRelease__buttonWrapper'>
                        <button class="NewRelease__subscribeUpwealth">
                            Subscribe to Upwealth!
                        </button>
                        <button
                            className="moveToNewSec__Btn"
                        // aria-description="move-to-the-next-section-button"
                        >
                            <img src={DownArrowIcon2} alt="downArrowIcon" />
                        </button>

                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default NewRelease