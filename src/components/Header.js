import React from 'react';
import './Header.css';


const header = () => {
  return (
    <div className='header'>
        <h2>This is a header💎</h2>
        <div className='logo'>C R Y P S I O N</div>

    <div className='searchBar'>
        <div>
            <input className='searchInput' placeholder='Search Here'/>
        </div>
    </div>
</div>
  )
}

export default header;