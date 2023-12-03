import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'

const Layout: React.FC = (props) => {
  return (
    <>
      <div className='bg-gray-200 min-h-screen flex flex-col'>
        <Header />
        
        <main className='bg-gray-200 h-full pt-5 pb-8'>
          <div className='container px-4 mx-auto'>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;