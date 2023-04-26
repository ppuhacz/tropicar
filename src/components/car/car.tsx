import React from "react";
import { useLocation } from "react-router";
import "./styles/car-styles.scss";
import verticalLine from "../../img/vertical-line.svg";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import { CarOffer } from "./types/car-interface";
import PriceListSection from "./sections/price-list-section";
import RequirementsAndDepositSection from "./sections/requirements-and-deposit-section";
import MileageLimitSection from "./sections/mileage-limit-section";
import PhotoGallery from "./photo-gallery";

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
    description,
    slug,
    deposit,
  }: CarOffer = location.state;

  const photos = [photo1, photo2, photo3];

  const dailyMileageLimit: number = 200;

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
        <div className='car-offer-info-container'>
          <div className='car-offer-photos'>
            <PhotoGallery
              photos={photos}
              altTag={`${brand} ${model}`}
              slug={slug}
            />
          </div>
          <div className='car-offer-info-description'>
            <div className='car-offer-additional-equipment'>
              <ul className='equipment-list'>
                <li className='offer-car-power' key={slug + "-power"}>
                  {power}
                </li>
                <li className='offer-car-engine' key={slug + "-engine"}>
                  {engine}
                </li>
                {tags.map((tag: string) => {
                  return (
                    <li className='equipment-list-item' key={slug + " " + tag}>
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='car-offer-description'>{description}</div>
          </div>
        </div>
        <PriceListSection price={pricePerDay} />
        <RequirementsAndDepositSection deposit={deposit} />
        <MileageLimitSection mileageLimit={dailyMileageLimit} />
      </div>
    </div>
  );
};

const ScrolledCar = ScrollToTop(Car);

export default ScrolledCar;
