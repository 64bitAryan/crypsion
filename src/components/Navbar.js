import React from 'react';
import logo from '../images/crypsion.png';
import search from '../images/search.png';
import profileIcon from '../images/person.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logoContainer'>
        <img src={logo} alt='Logo' className='crypsionLogo'/>
      </div>

      <div className='searchBar'>
        <div className='searchIconContainer'>
          <img src={search} alt='search icon' className='searchIcon' />
        </div>
        <input className='searchInput' placeholder="Search, Items, NFT's, Profiles"/>
      </div>

      <div className='headerItems'>
        <p className='exploreBtn'>Explore</p>
        <p className='statsBtn'>Stats</p>
        <p className='createBtn'>Create</p>
      </div>

      <div className='headerAction'>
        <div className='profileLogoContainer'>
          <img src={profileIcon} alt='profile icon' className='profileIcon'/>
        </div>
      </div>

    </div>
  );
}

export default Navbar;