import React from 'react'
import { NavLink } from 'react-router-dom'
import { CustomLinkType } from '../types/ui';

const CustomLink: React.FC<CustomLinkType> = ({ children, to, classes, activeClass }) => {
  return (
    <NavLink 
      to={ to }
      className={({isActive}) => [isActive ? activeClass : '', classes].join(' ').trim()}
    >
      { children }
    </NavLink>
  );
};

export default CustomLink;