import React from 'react'
import { Outlet } from 'react-router-dom';
import Menu from './menu/Menu'

const Create = () => {
  return (
    <>
        <Menu/>
        <Outlet/>
    </>
  );
}

export default Create;