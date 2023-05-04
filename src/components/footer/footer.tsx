import React from "react";
import { NavLink } from "react-router-dom";
// importing styles
import "./styles/footer-styles.scss";
// importing images
import verticalLine from "../../img/vertical-line.svg";
import githubIcon from "../../img/github-icon.svg";
import facebookIcon from "../../img/facebook-icon.svg";

export const Footer = () => {
  const navigationList = (
    <>
      <li className='footer-navigation-item'>
        <NavLink to='/fleet'>Our cars </NavLink>
      </li>
      <li className='footer-navigation-item'>
        <NavLink to='/contact-us'>Contact us </NavLink>
      </li>

      <li className='footer-navigation-item'>
        <NavLink to='/terms-of-service'>Terms of service</NavLink>
      </li>
    </>
  );

  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-section'>
          <div className='footer-about-us'>
            <span>
              <img
                src={verticalLine}
                alt='vertical line'
                className='vertical-line'
              />
              <h4>About us</h4>
            </span>
            <p className='footer-about-us'>
              Tropicar is a premium exotic car rental service that offers the
              ultimate driving experience in tropical destinations. With a wide
              selection of high-end sports cars, luxury convertibles, and SUVs,
              Tropicar provides the perfect ride for any occasion.
            </p>
          </div>
        </div>
        <div className='footer-section'>
          <span>
            <img
              src={verticalLine}
              alt='vertical line'
              className='vertical-line'
            />
            <h4>Menu</h4>
          </span>
          <ul>{navigationList}</ul>
        </div>
        <div className='footer-section contact'>
          <span>
            <img
              src={verticalLine}
              alt='vertical line'
              className='vertical-line'
            />
            <h4>Contact</h4>
          </span>
          <p>office@tropicar.com</p>
          <p>+48 000 000 000</p>
          <p>Rynek Staromiejski 6/7,</p>
          <p>75-007 Koszalin</p>
          <img src={facebookIcon} alt='facebook' />
          <a href='https://github.com/ppuhacz' target='_blank' rel='noreferrer'>
            <img src={githubIcon} alt='githbub' />
          </a>
        </div>
      </div>
    </footer>
  );
};
