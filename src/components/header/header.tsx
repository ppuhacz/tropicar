import React, { useState } from "react";
import "./styles/header-styles.scss";
import logoNew from "../../img/logo-new.webp";
import menuIcon from "../../img/menu-icon.svg";
import closeIcon from "../../img/close-icon.svg";
import { NavLink } from "react-router-dom";
import useIsMobile from "../../hooks/is-mobile";

function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const isMobile = useIsMobile();

  function handleOnClick() {
    setIsActive(!isActive);
  }

  const listItems = (
    <>
      <li className='navigation-item'>
        <NavLink to='/fleet'>Our cars </NavLink>
      </li>
      <li className='navigation-item'>
        <NavLink to='/contact-us'>Contact us </NavLink>
      </li>
      <li className='navigation-item'>
        <NavLink to='/login'>Sign in </NavLink>
      </li>
      <li className='navigation-item navigation-book-a-car'>
        <NavLink to='/booking'>Book a car </NavLink>
      </li>
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
