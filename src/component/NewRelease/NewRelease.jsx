import React from 'react';
import './NewRelease.scss';
import NewReleaseBg from '../../assets/images/newRelease.png'
import NewReleaseCardImg from '../../assets/images/newReleaseCardImg.png'

const NewRelease = () => {
    return (
        <div className='NewRelease__containerWrapper'>
            <img className='newReleaseText__bg' src={NewReleaseBg} alt='new release' />

            <div className='NewRelease__contentMainWrapper'>
                <div className='NewRelease__contentImageWrapper'>
                    <div className='NewRelease__ImageWrapper'>

                        <img src={NewReleaseCardImg} alt='new-release-cardImg' />
                    </div>
                </div>
                <div className='NewRelease__textContentWrapper'>
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
                        <button class="NewRelease__subscribeUpwealth">
                            Subscribe to Upwealth!
                        </button>
                </div>
            </div>
        </div>
    )
}

export default NewRelease