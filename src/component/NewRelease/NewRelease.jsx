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
                    the content div
                </div>
            </div>
        </div>
    )
}

export default NewRelease