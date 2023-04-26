import React from "react";
import verticalLine from "../../../img/vertical-line.svg";

type Props = {
  mileageLimit: number;
};

const MileageLimitSection = (props: Props) => {
  const { mileageLimit } = props;

  // TODO: Add an enum that will add the possibility of changing KMs into Miles and add the mileage limit to backend

  return (
    <section id='car-offer-mileage-limit'>
      <div className='car-offer-separator'>
        <span>
          <img
            src={verticalLine}
            alt='vertical line'
            className='vertical-line'
          />
          <h3>Mileage Limit</h3>
        </span>
      </div>
      <div className='car-offer-list'>
        <div className='car-offer-list-row'>
          <div className='car-offer-list-column-1'>
            <p>Daily</p>
          </div>
          <div className='car-offer-list-column-2'>
            <p>{mileageLimit} km</p>
          </div>
        </div>
        <div className='car-offer-list-row'>
          <div className='car-offer-list-column-1'>
            <p>Weekly</p>
          </div>
          <div className='car-offer-list-column-2'>
            <p>{mileageLimit * 7} km</p>
          </div>
        </div>
        <div className='car-offer-list-row'>
          <div className='car-offer-list-column-1'>
            <p>Two Weeks</p>
          </div>
          <div className='car-offer-list-column-2'>
            <p>{mileageLimit * 14} km</p>
          </div>
        </div>
        <div className='car-offer-list-row'>
          <div className='car-offer-list-column-1'>
            <p>Monthly</p>
          </div>
          <div className='car-offer-list-column-2'>
            <p>{mileageLimit * 30} km</p>
          </div>
        </div>
        <div className='car-offer-list-row'>
          <div className='car-offer-list-column-1'>
            <p>Annually</p>
          </div>
          <div className='car-offer-list-column-2'>
            <p>{mileageLimit * 200} km</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MileageLimitSection;
