import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import verticalLine from "../../img/vertical-line.svg";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import getCarInfo from "../../services/offers/getCarInfo";
import { CarInfo } from "./types/car-booking-interface";
import LoadingCircle from "../loading-circle/loading-cricle";
import "./styles/car-booking-styles.scss";

// WORK IN PROGRESS

const CarBooking = () => {
  const location = useLocation();
  const [carInfo, setcarInfo] = useState<CarInfo>(location.state || []);
  const [isLoading, setIsLoading] = useState<boolean>(!location.state);

  useEffect(() => {
    const CAR_SLUG_URL: string = location.pathname.slice(9);
    const fetchData = async () => {
      const carInfo: any = await getCarInfo(CAR_SLUG_URL);
      setcarInfo(carInfo);
      setIsLoading(false);
    };

    if (!location.state) {
      fetchData();
    }
  }, [location.state, location.pathname]);

  const { brand, model, photo1, pricePerDay, status }: CarInfo = carInfo;

  const isAvailable = status === "Available";

  return (
    <div className='booking-container'>
      {!isLoading ? (
        <div className='booking-wrapper'>
          <div className='car-offer-separator'>
            <span>
              <img
                src={verticalLine}
                alt='vertical line'
                className='vertical-line'
              />
              <h2>Booking</h2>
            </span>
          </div>
          <div className='booking-form-wrapper'>
            <form id='booking-form'>
              <div className='booking-personal-info'>
                <label htmlFor='first-name'>
                  First name <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  id='first-name'
                  placeholder='First name'
                  required
                />

                <label htmlFor='last-name'>
                  Last name <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  id='last-name'
                  placeholder='Last name'
                  required
                />

                <label htmlFor='e-mail'>
                  E-mail address <span className='required'>*</span>
                </label>
                <input
                  type='email'
                  id='e-mail'
                  placeholder='E-mail address'
                  required
                />

                <label htmlFor='phone-number'>
                  Phone number <span className='required'>*</span>
                </label>
                <input
                  type='tel'
                  id='phone-number'
                  placeholder='Phone number'
                  pattern='[0-9]{9}'
                  required
                />

                <label htmlFor='address'>
                  Address of permanent residence
                  <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  id='address'
                  placeholder='Address of permanent residence'
                  required
                />

                <label htmlFor='postal-code'>
                  Postal code <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  id='postal-code'
                  placeholder='Postal code'
                  required
                />

                <label htmlFor='city-town'>
                  City/town <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  id='city-town'
                  placeholder='City/town'
                  required
                />

                <label htmlFor='pesel'>PESEL</label>
                <input
                  type='text'
                  id='pesel'
                  placeholder='PESEL (if you have one)'
                />
                <small>
                  <span className='required'>*</span> - required
                </small>
                <button type='submit'>Book!</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <LoadingCircle />
      )}
    </div>
  );
};

export default ScrollToTop(CarBooking);
