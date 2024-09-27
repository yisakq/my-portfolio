import React from 'react';
import { logo } from '../assets/images';
import { menuLinks } from '../assets/constants';

const Navbar = () => {
  return (
    <nav className="flex items-center py-0.1 px-8 bg-secondary bg-opacity-10 rounded-xl text-white sticky top-6 max-sm:hidden">
      {/* Logo with flex properties */}
      <div className="flex-shrink-0">
        <img src={logo} alt="logo" className="w-12 h-auto" />
      </div>

      {/* Spacer to push the links to the right */}
      <div className="flex-grow" />

      {/* Links aligned to the right */}
      <ul className="flex text-opacity-50 text-white gap-6 text-lg font-Raleway">
        {menuLinks.map((menu) => (
          <li
            key={menu.id}
            className="hover:text-secondary transition duration-500 cursor-pointer ease-in-out hover:font-bold text-base font-light"
          >
            <a href={menu.id}>{menu.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
