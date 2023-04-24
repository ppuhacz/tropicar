import React from "react";
import { useLocation } from "react-router";
import "./styles/car-styles.scss";
import verticalLine from "../../img/vertical-line.svg";
import ScrollToTop from "../scroll-to-top/scroll-to-top";

const Car = () => {
  const location = useLocation();

  const {
    brand,
    model,
    engine,
    photo1,
    photo2,
    photo3,
    power,
    pricePerDay,
    tags,
    status,
    description,
    slug,
  } = location.state;

  return (
    <div className='car-offer-container'>
      <div className='car-offer-wrapper'>
        <div className='car-offer-separator'>
          <span>
            <img
              src={verticalLine}
              alt='vertical line'
              className='vertical-line'
            />
            <h2>
              {brand} {model}
            </h2>
          </span>
        </div>
        <div className='car-offer-photos'>
          <img src={photo1} alt={`${brand} ${model}`} width='100%' />
        </div>
        <div className='car-offer-additional-equipment'>
          <ul className='equipment-list'>
            <li className='offer-car-power' key={slug + "-power"}>
              {power}
            </li>
            <li className='offer-car-engine' key={slug + "-engine"}>
              {engine}
            </li>
            {tags.map((tag: any) => {
              return (
                <li className='equipment-list-item' key={slug + " " + tag}>
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='car-offer-description'>{description}</div>
        <div className='car-offer-separator'>
          <span>
            <img
              src={verticalLine}
              alt='vertical line'
              className='vertical-line'
            />
            <h3>Price</h3>
          </span>
        </div>
        <div className='car-offer-price-list'>
          <div className='car-offer-price-list-row'>
            <div className='car-offer-rental-duration'>
              <p>1-3 days</p>
            </div>
            <div className='car-offer-rental-price'>
              <p>€{(pricePerDay * 1.3).toFixed(2)}/day</p>
            </div>
          </div>
          <div className='car-offer-price-list-row'>
            <div className='car-offer-rental-duration'>
              <p>4-6 days</p>
            </div>
            <div className='car-offer-rental-price'>
              <p>€{(pricePerDay * 1.2).toFixed(2)}/day</p>
            </div>
          </div>
          <div className='car-offer-price-list-row'>
            <div className='car-offer-rental-duration'>
              <p>7-14 days</p>
            </div>
            <div className='car-offer-rental-price'>
              <p>€{(pricePerDay * 1.1).toFixed(2)}/day</p>
            </div>
          </div>
          <div className='car-offer-price-list-row'>
            <div className='car-offer-rental-duration'>
              <p>14-21 days</p>
            </div>
            <div className='car-offer-rental-price'>
              <p>€{pricePerDay.toFixed(2)}/day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrolledCar = ScrollToTop(Car);

export default ScrolledCar;
