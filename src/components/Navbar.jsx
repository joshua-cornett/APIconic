import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/NASA_APOD" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            NASA APOD
          </NavLink>
        </li>
        {/* Repeat for any new pages */}
      </ul>
    </nav>
  );

  export default Navbar;