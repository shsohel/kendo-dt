import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = ( props ) => {
  console.log( props )
  return (
    <div className="layout ">
      <Navigation />
      <div className='main'>
        <Outlet context={{ hello: 'world' }} />
      </div>

    </div>
  );
};

export default Layout;
