import React from "react";
import "./styles/booking-submitted-styles.scss";
import { NavLink } from "react-router-dom";
import GreenTickIcon from "../../img/rectangular-tick-green-icon.svg";

interface BookingSubmittedProps {
  brand: string;
  model: string;
  formDetails: object | undefined;
}

const BookingSubmitted = ({
  brand,
  model,
  formDetails,
}: BookingSubmittedProps) => {
  return (
    <div className='booking-submitted-container'>
      <div className='booking-submitted-wrapper'>
        <div className='booking-submitted-title'>
          <h4>
            You've succesfully booked {brand} {model}
          </h4>
        </div>
        <div className='green-tick-icon'>
          <img src={GreenTickIcon} alt='booking succesful' />
        </div>
        <span className='order-confirmation'>
          Order confirmation has been sent to your email
        </span>
        <span className='go-back'>
          <p>
            <NavLink to='/'>Go back to home page</NavLink>
          </p>
        </span>
        <small>
          * For project purpose only, all the form data has been logged out in
          the console *
        </small>
      </div>
    </div>
  );
};

export default BookingSubmitted;
