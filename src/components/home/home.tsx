import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getRecent from "../../services/offers/getRecent";
import "./styles/home-styles.scss";
// Importing info panel descriptions
import { infoPanels } from "./data/infoPanels";
// Importing JSX components
import { InfoPanel } from "./types/info-panels-interface";
import MapDisplay from "./map";
import OffersPanels from "../offer-panels/offers-panels";
// Importing photos
import { backgroundPhotos } from "./data/background-photos";
import verticalLine from "../../img/vertical-line.svg";
import tickIcon from "../../img/rectangular-tick-icon.svg";
import SlideShow from "./slideshow";
import LoadingCircle from "../loading-circle/loading-cricle";

const Home = () => {
  const [offers, setOffers] = useState<any>([]);

  useEffect(() => {
    const RECENT_OFFERS: number = 5;
    const fetchData = async () => {
      const offersData = await getRecent(RECENT_OFFERS);
      setOffers(offersData);
    };

    fetchData();
  }, []);

  // Iterating through all information to create info panels
  const infoPanelsMapped = infoPanels.map((panel: InfoPanel) => {
    return (
      <div
        className='home-page-info-panel'
        key={panel.id}
        id={`panel-${panel.id}`}
      >
        <span>
          <img src={tickIcon} alt='tick' className='panel-tick-icon' />
          <h2>{panel.title}</h2>
        </span>
        <p>{panel.description}</p>
      </div>
    );
  });

  return (
    <div className='home-page'>
      <section id='home-page-title-section'>
        <div className='home-page-title'>
          <div className='home-page-title-photo-wrapper'>
            <SlideShow photos={backgroundPhotos} slideDuration={8000} />
          </div>
          <div className='home-page-title-text-container'>
            <div className='home-page-title-text-wrapper'>
              <h2 className='home-page-title-header'>Exotic car rental</h2>
              <p className='home-page-title-info'>
                Tropicar is a premium exotic car rental service that offers the
                ultimate driving experience in tropical destinations. With a
                wide selection of high-end sports cars, luxury convertibles, and
                SUVs, Tropicar provides the perfect ride for any occasion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='home-page-why-us-section'>
        <div className='home-page-why-us-separator'>
          <span>
            <img
              src={verticalLine}
              alt='vertical line'
              className='vertical-line'
            />
            <h2>Why TropiCar?</h2>
          </span>
        </div>
        <div className='home-page-info-panels-container'>
          {infoPanelsMapped}
        </div>
      </section>
      <section id='home-page-newest-offers-section'>
        <div className='home-page-newest-offers-container'>
          <div className='home-page-newest-offers-title'>
            <span>
              <img
                src={verticalLine}
                alt='vertical line'
                className='vertical-line'
              />
              <h3>Our newest additions</h3>
            </span>
          </div>
          <div className='home-page-newest-offers-wrapper'>
            {offers.length > 0 ? (
              <>
                <OffersPanels offers={offers} />
                <div className='all-offers-container'>
                  <NavLink to='/fleet'>
                    <button className='show-all-offers-button'>
                      <span>Our fleet</span>
                    </button>
                  </NavLink>
                </div>
              </>
            ) : (
              <LoadingCircle />
            )}
          </div>
        </div>
      </section>
      <section id='location-section'>
        <div className='home-page-location-container'>
          <div className='home-page-location-title'>
            <span>
              <img
                src={verticalLine}
                alt='vertical line'
                className='vertical-line'
              />
              <h3>Our location</h3>
            </span>
          </div>
          <MapDisplay />
        </div>
      </section>
    </div>
  );
};

export default Home;
