import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router";
// Importing data fetch function
import getCarInfo from "../../services/offers/getCarInfo";
// Importing components
import PersonalInfoForm from "./personal-info-form";
import CarInfoForm from "./car-info-form";
import PaymentMethodRadio from "./payment-method-radio";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import LoadingCircle from "../loading-circle/loading-cricle";
import BookingSubmitted from "../booking-submitted/booking-submitted";
// Importing types
import { CarInfo } from "./types/car-booking-interface";
import { FormInput } from "./types/form-input-types";
// Importing images
import tickIcon from "../../img/rectangular-tick-icon.svg";
import verticalLine from "../../img/vertical-line.svg";
// Importing styles
import "./styles/car-booking-styles.scss";

const CarBooking = () => {
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const [carInfo, setcarInfo] = useState<CarInfo>(location.state || []);
  const { brand, model } = carInfo;
  const [isLoading, setIsLoading] = useState<boolean>(!location.state);
  const [pricePerDay, setPricePerDay] = useState<string | number>("");
  const [totalPrice, setTotalPrice] = useState<string | number>("");
  const [totalMileageLimit, setTotalMileageLimit] = useState<string | number>(
    ""
  );
  const [totalDays, setTotalDays] = useState<string | number>("");
  const [didSubmit, setDidSubmit] = useState<boolean>(false);
  const [rentalFormFilled, setRentalFormFilled] = useState<
    object | undefined
  >();

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

    console.log(rentalFormFilled);
  }, [location.state, location.pathname, rentalFormFilled, didSubmit]);

  const onSubmit: SubmitHandler<FormInput> = (data: object) => {
    setRentalFormFilled(() => [
      {
        vehicle: {
          brand: brand,
          model: model,
        },
        formData: data,
        rentalInfo: {
          pricePerDay,
          totalDays,
          totalMileageLimit,
          totalPrice,
        },
      },
    ]);
    setDidSubmit(() => true);
  };

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
            <form id='booking-form' onSubmit={handleSubmit(onSubmit)}>
              <div className='rental-information'>
                <PersonalInfoForm register={register} />
                <CarInfoForm
                  carInfo={carInfo}
                  register={register}
                  setTotalPrice={setTotalPrice}
                  setTotalMileageLimit={setTotalMileageLimit}
                  setTotalDays={setTotalDays}
                  setPricePerDay={setPricePerDay}
                />
              </div>
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
              <PaymentMethodRadio register={register} />
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
                  {...register("userMessage")}
                />
              </div>
              <div className='checkbox-container'>
                <span className='error-message'>
                  {errors.termsOfService && errors.termsOfService.message}
                </span>
                <div className='checkbox-wrapper'>
                  <input
                    type='checkbox'
                    id='tos-acknowledge'
                    {...register("termsOfService", {
                      required: "You must accept our Terms of service!",
                    })}
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
                Book now
              </button>
            </form>
          </div>
          {didSubmit && (
            <BookingSubmitted
              formDetails={rentalFormFilled}
              brand={brand}
              model={model}
            />
          )}
        </div>
      ) : (
        <LoadingCircle />
      )}
    </div>
  );
};

export default ScrollToTop(CarBooking);
