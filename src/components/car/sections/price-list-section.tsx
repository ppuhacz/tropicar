import React from "react";
import verticalLine from "../../../img/vertical-line.svg";

interface Props {
  price: number;
}

const PriceListSection = (props: Props) => {
  const { price } = props;
  return (
    <section id='price-list'>
      <div className='car-offer-separator'>
        <span>
          <img
            src={verticalLine}
            alt='vertical line'
            className='vertical-line'
          />
          <h3>Price</h3>
        </span>
      </div>
      <div className='car-offer-list'>
        <div className='car-offer-list-row'>
          <div className='car-offer-list-column-1'>
            <p>1-3 days</p>
          </div>
          <div className='car-offer-list-column-2'>
            <p>€{(price * 1.5).toFixed(2)}/day</p>
          </div>
        </div>
        <div className='car-offer-list-row'>
          <div className='car-offer-list-column-1'>
            <p>4-6 days</p>
          </div>
          <div className='car-offer-list-column-2'>
            <p>€{(price * 1.3).toFixed(2)}/day</p>
          </div>
        </div>
        <div className='car-offer-list-row'>
          <div className='car-offer-list-column-1'>
            <p>7-14 days</p>
          </div>
          <div className='car-offer-list-column-2'>
            <p>€{(price * 1.2).toFixed(2)}/day</p>
          </div>
        </div>
        <div className='car-offer-list-row'>
          <div className='car-offer-list-column-1'>
            <p>15-31 days</p>
          </div>
          <div className='car-offer-list-column-2'>
            <p>€{(price * 1.15).toFixed(2)}/day</p>
          </div>
        </div>
        <div className='car-offer-list-row'>
          <div className='car-offer-list-column-1'>
            <p>31+ days</p>
          </div>
          <div className='car-offer-list-column-2'>
            <p>€{price.toFixed(2)}/day</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceListSection;
