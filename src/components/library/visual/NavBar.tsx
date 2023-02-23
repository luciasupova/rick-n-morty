import React from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css';

interface NavBarProps {
  title1: string;
  title2: string;
  title3: string;
}

export const NavBar = ({title1, title2, title3 }: NavBarProps) => (
  <header>
    <div className="wrapper">
      <div>
        <img src="./src/assets/ricknmorty_logo.png" alt="" />
      </div>
      <div>
        <NavLink to="/page1">{title1}</NavLink>
        <NavLink to="/page2">{title2}</NavLink>
        <NavLink to="/page3">{title3}</NavLink>
      </div>
      <div>Placeholder text</div>
    </div>
  </header>
);

