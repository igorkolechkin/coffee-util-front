import React from 'react';
import Nav from './Nav'

const Header: React.FC = (props) => {
  return (
    <header className='bg-neutral-600'>
      <div className='container px-4 mx-auto'>
        <Nav />
      </div>
    </header>
  );
};

export default Header;