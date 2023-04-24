import React from "react";
import { NavLink } from "react-router-dom";
import { Offers, Offer } from "./types/offers-panels-interface";
import "./styles/offers-panels-styles.scss";

const OffersPanels = ({ offers }: Offers) => {
  // Iterating through all offers fetched and returning them in separate panels
  const recentOffersMapped = offers?.map((offer: Offer) => {
    return (
      <div className='offer-wrapper' key={offer.slug}>
        <div className='offer-image'>
          <img src={offer.photo1} alt='offer car' key={"carID=" + offer.ID} />
          <img
            src={offer.photo2}
            alt='second car'
            className='offer-hover-photo'
            loading='lazy'
          />
        </div>
        <div className='offer-additional-equipment'>
          <NavLink state={offer} to={`/offer/${offer.slug}`}>
            <h2>{offer.brand + " " + offer.model}</h2>
          </NavLink>
          <hr className='offer-horizontal-line' />
          <ul>
            <li className='offer-car-power' key={offer.slug + "-power"}>
              {offer.power}
            </li>
            <li className='offer-car-engine' key={offer.slug + "-engine"}>
              {offer.engine}
            </li>
            {offer.tags.map((tag) => {
              return <li key={offer.slug + " " + tag}>{tag}</li>;
            })}
          </ul>
        </div>
        <div className='offer-rental-info'>
          <div className='rental-price'>
            <span>
              <h3>Price per day</h3>
            </span>
            <span className='price'>{offer.pricePerDay}€</span>
          </div>
          <NavLink
            state={offer}
            to={`/offer/${offer.slug}`}
            className='offer-more-info'
          >
            View more info
          </NavLink>

          <NavLink
            state={offer}
            to={`/booking/${offer.slug}`}
            className='offer-book'
          >
            Book this car
          </NavLink>
        </div>
      </div>
    );
  });

  return <>{recentOffersMapped}</>;
};

export default OffersPanels;
