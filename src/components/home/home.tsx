import React, { useEffect, useState } from "react";
import getRecent from "../../services/offers/getRecent";
import "./styles/home-styles.scss";
// Importing info panel descriptions
import { infoPanels } from "./data/infoPanels";
// Importing photos
import { backgroundPhotos } from "./data/background-photos";
import verticalLine from "../../img/vertical-line.svg";
import tickIcon from "../../img/rectangular-tick-icon.svg";
import SlideShow from "./slideshow";
import { InfoPanel } from "./types/info-panels-interface";
import { Offer } from "./types/home-interface";
import { NavLink } from "react-router-dom";
import Map from "./map";

const Home = () => {
  const [offers, setOffers] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const offersData = await getRecent(5); // fetching 5 of the most recent offers
      setOffers(offersData);
    };

    fetchData();
  }, []);

  // Iterating through all information to create info panels
  const infoPanelsMapped = infoPanels.map((panel: InfoPanel) => {
    return (
      <div
        className="home-page-info-panel"
        key={panel.id}
        id={`panel-${panel.id}`}
      >
        <span>
          <img src={tickIcon} alt="tick" className="panel-tick-icon" />
          <h2>{panel.title}</h2>
        </span>
        <p>{panel.description}</p>
      </div>
    );
  });

  // Iterating through all offers fetched and returning them in separate panels
  const recentOffersMapped = offers.map((offer: Offer) => {
    return (
      <div className="offer-wrapper" key={offer.slug}>
        <div className="offer-image">
          <img src={offer.photo1} alt="offer car" key={"carID=" + offer.ID} />
          <img
            src={offer.photo2}
            alt="second car"
            className="offer-hover-photo"
          />
        </div>
        <div className="offer-additional-equipment">
          <h2>{offer.brand + " " + offer.model}</h2>
          <hr className="offer-horizontal-line" />
          <ul>
            <li className="offer-car-power" key={offer.slug + "-power"}>
              {offer.power}
            </li>
            <li className="offer-car-engine" key={offer.slug + "-engine"}>
              {offer.engine}
            </li>
            {offer.tags.map((tag) => {
              return <li key={offer.slug + " " + tag}>{tag}</li>;
            })}
          </ul>
        </div>
        <div className="offer-rental-info">
          <div className="rental-price">
            <span>
              <h3>Price per day</h3>
            </span>
            <span className="price">{offer.pricePerDay}€</span>
          </div>
          <NavLink
            state={offer}
            to={`/offer/${offer.slug}`}
            className="offer-more-info"
          >
            View more info
          </NavLink>

          <NavLink
            state={offer}
            to={`/booking/${offer.slug}`}
            className="offer-book"
          >
            Book this car
          </NavLink>
        </div>
      </div>
    );
  });

  return (
    <div className="home-page">
      <section id="home-page-title-section">
        <div className="home-page-title">
          <div className="home-page-title-photo-wrapper">
            <SlideShow photos={backgroundPhotos} slideDuration={8000} />
          </div>
          <div className="home-page-title-text-container">
            <div className="home-page-title-text-wrapper">
              <h2 className="home-page-title-header">Exotic car rental</h2>
              <p className="home-page-title-info">
                Tropicar is a premium exotic car rental service that offers the
                ultimate driving experience in tropical destinations. With a
                wide selection of high-end sports cars, luxury convertibles, and
                SUVs, Tropicar provides the perfect ride for any occasion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="home-page-why-us-section">
        <div className="home-page-why-us-separator">
          <span>
            <img
              src={verticalLine}
              alt="vertical line"
              className="vertical-line"
            />
            <h2>Why TropiCar?</h2>
          </span>
        </div>
        <div className="home-page-info-panels-container">
          {infoPanelsMapped}
        </div>
      </section>
      <section id="home-page-newest-offers-section">
        <div className="home-page-newest-offers-container">
          <div className="home-page-newest-offers-title">
            <span>
              <img
                src={verticalLine}
                alt="vertical line"
                className="vertical-line"
              />
              <h3>Our newest additions</h3>
            </span>
          </div>
          <div className="home-page-newest-offers-wrapper">
            {offers.length > 0 ? (
              <>
                {recentOffersMapped}
                <div className="all-offers-container">
                  <NavLink to="/fleet">
                    <button className="show-all-offers-button">
                      <span>Our fleet</span>
                    </button>
                  </NavLink>
                </div>
              </>
            ) : (
              <div className="loading-container">
                <div className="loading-circle"></div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section id="location-section">
        <div className="home-page-location-container">
          <div className="home-page-location-title">
            <span>
              <img
                src={verticalLine}
                alt="vertical line"
                className="vertical-line"
              />
              <h3>Our location</h3>
            </span>
          </div>
          <Map />
        </div>
      </section>
    </div>
  );
};

export default Home;
