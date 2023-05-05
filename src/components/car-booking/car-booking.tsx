import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import verticalLine from "../../img/vertical-line.svg";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import getCarInfo from "../../services/offers/getCarInfo";
import { CarInfo } from "./types/car-booking-interface";
import LoadingCircle from "../loading-circle/loading-cricle";
import "./styles/car-booking-styles.scss";
import PersonalInfoForm from "./personal-info-form";
import CarInfoForm from "./car-info-form";

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
              {/* <button type='submit'>Book!</button> */}
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
