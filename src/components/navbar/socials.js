import React from 'react';
// import social data
import { socialData } from '../../data';

const Socials = () => {
  return (
    <ul className='flex justify-center items-center gap-x-[20px]'>
      {socialData.map((item, index) => {
        return (
          <li key={index}>
            <a className=' font-primary uppercase' href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
