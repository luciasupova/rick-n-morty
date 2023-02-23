import React from 'react';
import './NavBar.css';

interface HeaderProps {
  title1: string;
  title2: string;
  title3: string;
}

export const Header = ({title1, title2, title3 }: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div>
        <img src="./src/assets/ricknmorty_logo.png" alt="" />
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
