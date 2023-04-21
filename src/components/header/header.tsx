import React, { useState } from "react";
import "./styles/header-styles.scss";
import logoNew from "../../img/logo-new.webp";
import menuIcon from "../../img/menu-icon.svg";
import closeIcon from "../../img/close-icon.svg";
import { NavLink } from "react-router-dom";
import useIsMobile from "../../hooks/is-mobile-hook";

function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const isMobile = useIsMobile();

  function handleOnClick() {
    setIsActive(!isActive);
  }

  const listItems = (
    <>
      <NavLink to='/fleet'>
        <li className='navigation-item'>Our cars</li>
      </NavLink>
      <NavLink to='/contact-us'>
        <li className='navigation-item'>Contact us</li>
      </NavLink>
      <NavLink to='/login'>
        <li className='navigation-item'>Sign in</li>
      </NavLink>
      <NavLink to='/booking'>
        <li className='navigation-item navigation-book-a-car'>Book a car</li>
      </NavLink>
    </>
  );

  return (
    <header>
      <div className='header-icon'>
        <NavLink to='/'>
          <img src={logoNew} className='header-logo' alt='logo' />
        </NavLink>
      </div>
      <div className='header-navigation'>
        {isMobile ? (
          <div className='dropdown-menu'>
            <button className='dropdown-menu-button' onClick={handleOnClick}>
              {isActive ? (
                <img
                  src={closeIcon}
                  className='dropdown-menu-close-icon'
                  alt='close menu'
                />
              ) : (
                <img
                  src={menuIcon}
                  className='dropdown-menu-open-icon'
                  alt='open-menu'
                />
              )}
            </button>
            <ul
              className={
                isActive ? "dropdown-menu-list-active" : "dropdown-menu-list"
              }
            >
              {listItems}
            </ul>
          </div>
        ) : (
          // display regular list if on desktop
          <ul className='header-navigation-list'>{listItems}</ul>
        )}
      </div>
    </header>
  );
}

export default Header;
