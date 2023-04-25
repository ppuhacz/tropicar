import React from "react";
import verticalLine from "../../../img/vertical-line.svg";

interface Props {
  deposit: number;
}

interface Requirements {
  age: number;
  driversLicensePeriod: number;
}

const RequirementsAndDepositSection = (props: Props) => {
  const { deposit } = props;

  const requirements: Requirements = {
    age: 25,
    driversLicensePeriod: 2,
  };

  const { age, driversLicensePeriod } = requirements;

  return (
    <section id='requirements-and-deposit'>
      <div className='car-offer-deposit-wrapper'>
        <div className='car-offer-separator'>
          <span>
            <img
              src={verticalLine}
              alt='vertical line'
              className='vertical-line'
            />
            <h3>Refundable Deposit</h3>
          </span>
        </div>
        <div className='car-offer-list'>
          <div className='car-offer-list-row'>
            <div className='car-offer-list-column-1'>
              <p>Payment at office</p>
            </div>
            <div className='car-offer-list-column-2'>
              <p>€{deposit}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='car-offer-requirements-wrapper'>
        <div className='car-offer-separator'>
          <span>
            <img
              src={verticalLine}
              alt='vertical line'
              className='vertical-line'
            />
            <h3>Requirements</h3>
          </span>
        </div>
        <div className='car-offer-list'>
          <div className='car-offer-list-row'>
            <div className='car-offer-list-column-1'>
              <p>Minimum Age</p>
            </div>
            <div className='car-offer-list-column-2'>
              <p>{age}</p>
            </div>
          </div>
          <div className='car-offer-list-row'>
            <div className='car-offer-list-column-1'>
              <p>Period of having a driver's license</p>
            </div>
            <div className='car-offer-list-column-2'>
              <p>{driversLicensePeriod} years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsAndDepositSection;
