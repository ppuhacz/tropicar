import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./styles/car-styles.scss";
import verticalLine from "../../img/vertical-line.svg";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import { CarOffer } from "./types/car-interface";
import PriceListSection from "./sections/price-list-section";
import RequirementsAndDepositSection from "./sections/requirements-and-deposit-section";
import MileageLimitSection from "./sections/mileage-limit-section";
import PhotoGallery from "./photo-gallery";
import getCarInfo from "../../services/offers/getCarInfo";
import LoadingCircle from "../loading-circle/loading-cricle";
import MoreQuestionsSection from "./sections/contact-form-section";
import { NavLink } from "react-router-dom";

const Car = () => {
  const location = useLocation();
  const [carInfo, setcarInfo] = useState<CarOffer>(location.state || []);
  const [isLoading, setIsLoading] = useState<boolean>(!location.state);

  useEffect(() => {
    const CAR_SLUG_URL: string = location.pathname.slice(7);

    const fetchData = async () => {
      const carInfo: any = await getCarInfo(CAR_SLUG_URL);
      setcarInfo(carInfo);
      setIsLoading(false);
    };

    if (!location.state) {
      fetchData();
    }
  }, [location.state, location.pathname]);

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
    status,
    dailyMileageLimitKM,
  }: CarOffer = carInfo;

  const photos = [photo1, photo2, photo3];

  const isAvailable =
    status === "Available" ? (
      <p className='status status-available'>✓ Available</p>
    ) : (
      <p className='status status-unavailable'>✖ Unavailable</p>
    );

  return (
    <div className='car-offer-container'>
      {!isLoading ? (
        <div className='car-offer-wrapper'>
          <div className='car-offer-separator'>
            <span>
              <img
                src={verticalLine}
                alt='vertical line'
                className='vertical-line'
              />
              <span className='car-offer-title'>
                <h2>
                  {brand} {model}
                </h2>
                {isAvailable}
              </span>
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
                      <li
                        className='equipment-list-item'
                        key={slug + " " + tag}
                      >
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
          <MileageLimitSection mileageLimit={dailyMileageLimitKM} />
          <MoreQuestionsSection />
          <div className='book-this-car'>
            <NavLink
              state={carInfo}
              to={`/booking/${slug}`}
              className='book-this-car-button'
            >
              Book this car
            </NavLink>
          </div>
        </div>
      ) : (
        <LoadingCircle />
      )}
    </div>
  );
};

const ScrolledCar = ScrollToTop(Car);

export default ScrolledCar;
