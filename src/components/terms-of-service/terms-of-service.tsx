import React from "react";
import verticalLine from "../../img/vertical-line.svg";
import "./styles/terms-of-servicer-styles.scss";
import ScrollToTop from "../scroll-to-top/scroll-to-top";

const TermsOfService = () => {
  const rules = (
    <>
      <li>
        To rent a vehicle from TropiCar, renters must be at least 21 years of
        age and possess a valid driver's license for a minimum of 2 years.
      </li>
      <li>
        Renters are required to pay a rental fee at the time of rental. Payment
        may be made by credit card or cash.
      </li>
      <li>
        Renters are required to provide proof of insurance that covers rental
        vehicles or purchase TropiCar's insurance at the time of rental.
      </li>
      <li>
        Additional drivers may be added to the rental agreement for an
        additional fee.
      </li>
      <li>
        The rental agreement includes a specified number of miles. Additional
        mileage charges may apply if the mileage limit is exceeded.
      </li>
      <li>
        Renters are required to return the vehicle on the date and time
        specified in the rental agreement. A late fee may be charged for returns
        made after the scheduled return time.
      </li>
      <li>
        Renters are prohibited from using the rental vehicle for any illegal
        activities or racing, and may not drive the vehicle outside of the
        United States without prior written approval from TropiCar.
      </li>
      <li>
        Renters are required to return the vehicle in the same condition as when
        it was rented, with normal wear and tear expected. Renters are
        responsible for any damage to the vehicle during the rental period.
      </li>
      <li>
        Renters are required to refuel the vehicle to the same level as when it
        was rented before returning it to TropiCar.
      </li>
      <li>
        A deposit may be required at the time of rental, and will be refunded
        upon return of the vehicle in the same condition as when it was rented,
        subject to any applicable fees or charges.
      </li>
    </>
  );

  return (
    <div className='tos-container'>
      <div className='car-offer-separator'>
        <span>
          <img
            src={verticalLine}
            alt='vertical line'
            className='vertical-line'
          />
          <h3>Terms of service</h3>
        </span>
      </div>
      <div className='tos-wrapper'>
        <ol>{rules}</ol>
      </div>
    </div>
  );
};

export default ScrollToTop(TermsOfService);
