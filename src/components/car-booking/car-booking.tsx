import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import tickIcon from "../../img/rectangular-tick-icon.svg";
import verticalLine from "../../img/vertical-line.svg";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import getCarInfo from "../../services/offers/getCarInfo";
import { CarInfo } from "./types/car-booking-interface";
import LoadingCircle from "../loading-circle/loading-cricle";
import "./styles/car-booking-styles.scss";
import PersonalInfoForm from "./personal-info-form";
import CarInfoForm from "./car-info-form";
import PaymentMethodRadio from "./payment-method-radio";
import { NavLink } from "react-router-dom";

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
              <PersonalInfoForm />
              <CarInfoForm carInfo={carInfo} />
              <div className='car-offer-separator'>
                <span>
                  <img
                    src={verticalLine}
                    alt='vertical line'
                    className='vertical-line'
                  />
                  <h2>Payment method</h2>
                </span>
              </div>
              <PaymentMethodRadio />
              <div className='car-offer-separator'>
                <span>
                  <img
                    src={verticalLine}
                    alt='vertical line'
                    className='vertical-line'
                  />
                  <h2>Leave us a message</h2>
                </span>
              </div>
              <div className='input-wrapper'>
                <textarea
                  id='user-booking-message'
                  placeholder='Tell us more about your needs or ask us anything'
                />
              </div>
              <div className='checkbox-container'>
                <div className='checkbox-wrapper'>
                  <input
                    type='checkbox'
                    name='tos-acknowldge'
                    id='tos-acknowledge'
                    required
                  />

                  <div className='checkbox-label'>
                    <label htmlFor='tos-acknowledge'>
                      <div className='checkbox-tick'>
                        <img
                          src={tickIcon}
                          className='checkbox-tick'
                          alt='tos acknowledge'
                        />
                      </div>
                      <span>
                        I have read and agree to the{" "}
                        <NavLink to='/terms-of-service'>
                          terms of service
                        </NavLink>{" "}
                        of Tropicar <span className='required'>*</span>
                      </span>
                    </label>
                  </div>
                </div>
                <small>
                  <span className='required'>*</span> - required
                </small>
              </div>
              <button type='submit' className='submit-form-button'>
                Book
              </button>
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
