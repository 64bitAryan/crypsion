import React from 'react';
import './Landing.css';
// import poster from '../images/bgImg.jpg';

const Landing = () => {
  return (
    <div className='LandingParent'>
        <div className='imagePoster'>
          <div className='imagePosterGradient'>
            <div className='titleText'>
              Discover, collect, and sell <br/> extraordinary NFTs
            </div>
            <div className='subtitleText'>
              Crypsion is the world's first and largest NFT marketplace
            </div>
          </div>
        </div>
    </div>
  )
}

export default Landing;