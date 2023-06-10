import React from 'react';
import "./nav.css";
// import nav data
import { navDataHome } from '../../data';
import { NavLink } from 'react-router-dom';


const NavHome = () => {
  // destructure nav data
  const { items } = navDataHome;

  return (
    <nav>
      <ul className='flex gap-x-[58px]'>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                   className='link hover-item'
                to={item.href}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavHome;
