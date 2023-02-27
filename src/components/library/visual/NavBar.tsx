import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";

interface NavBarProps {
  title1: string;
  title2: string;
  title3: string;
}

export const NavBar = ({title1, title2, title3 }: NavBarProps) => (
  <header>
    <div className="wrapper">
    <div className='logo'>
        <NavLink to="/MainPage">
          <img src="./src/assets/ricknmorty_logo.png" alt="logo" />
        </NavLink>
      </div>
      <div className='titles'>
        <NavLink to="/MainPage">{title1}</NavLink>
        <NavLink to="/Locations">{title2}</NavLink>
        <NavLink to="/Episodes">{title3}</NavLink>
      </div>
      <div></div>
    </div>
  </header>
);

