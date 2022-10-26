import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Create.css'

const Menu = () => {
  return (
    <div className='mainContainer'>
        <div className='realtiveContainer'>
            <div className='shiftButtons'>
            <NavLink to={'collection'} style={({ isActive }) => ({ background: isActive ? '#2E8EEE' : '#3E3E3E' })} className='flex-child-element createCollection'>Create a Collection</NavLink>
            <NavLink to={'item'} style={({ isActive }) => ({ background: isActive ? '#2E8EEE' : '#3E3E3E' })} className='flex-child-element createItem'>Create a new Item</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Menu