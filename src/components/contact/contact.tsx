import React from "react";
// importing components
import LeafletMap from "../leaflet-map/leaflet-map";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
// importing images
import verticalLine from "../../img/vertical-line.svg";
import phoneIcon from "../../img/phone-rectangular-icon.svg";
import locationIcon from "../../img/location-rectangular-icon.svg";
import emailIcon from "../../img/email-rectangular-icon.svg";
import githubIcon from "../../img/github-icon.svg";
// importing styles
import "./styles/contact-styles.scss";

const Contact = () => {
  return (
    <div className='contact-page-container'>
      <div className='contact-page-wrapper'>
        <div className='car-offer-separator'>
          <span>
            <img
              src={verticalLine}
              alt='vertical line'
              className='vertical-line'
            />
            <h3>Contact us</h3>
          </span>
        </div>
        <div className='contact-info-wrapper'>
          <div className='contact-info-phone'>
            <span>
              <img src={phoneIcon} alt='phone number' width={30} /> +48 000 000
              000
            </span>
          </div>
          <div className='contact-info-wrapper'>
            <span>
              <img src={emailIcon} alt='email address' width={30} />
              office@tropicar.com
            </span>
          </div>
          <div className='contact-info-wrapper'>
            <span>
              <img src={locationIcon} alt='office location' width={30} />
              Rynek Staromiejski 6/7, <br />
              75-007 Koszalin
            </span>
          </div>
          <div className='contact-info-wrapper'>
            <h4 className='social-media-title'>Find us on social media</h4>
            <span>
              <a
                href='https://github.com/ppuhacz'
                target='_blank'
                rel='noreferrer'
              >
                <img src={githubIcon} alt='githbub' width={40} title='Github' />
              </a>
            </span>
          </div>
        </div>
      </div>
      <LeafletMap />
    </div>
  );
};

export default ScrollToTop(Contact);
