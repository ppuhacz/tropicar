import React from "react";
import verticalLine from "../../../img/vertical-line.svg";
import "../styles/booking-form-styles.scss";

const BookingFormSection = () => {
  return (
    <section id='booking-form-section'>
      <div className='booking-form-wrapper'>
        <div className='car-offer-separator'>
          <span>
            <img
              src={verticalLine}
              alt='vertical line'
              className='vertical-line'
            />
            <h3>Book this car</h3>
          </span>
        </div>
        <div className='booking-form-wrapper'>
          <div className='booking-form'>
            <p className='booking-form-info'>
              If you are interested in booking this car feel free to contact us!
            </p>
            <div className='booking-form-and-contact-info-wrapper'>
              <form>
                <div className='booking-form-input'>
                  <input
                    type='text'
                    name='e-mail-address'
                    autoComplete='off'
                    required
                    placeholder='E-mail address'
                  />
                </div>
                <div className='booking-form-input'>
                  <input
                    type='text'
                    name='phone-number'
                    autoComplete='off'
                    required
                    placeholder='Phone number'
                  />
                </div>
                <div className='booking-form-input'>
                  <textarea
                    name='date-from'
                    autoComplete='off'
                    placeholder='Tell us more about your needs!'
                    required
                  />
                </div>
              </form>
              <div className='contact-info'>
                <h4>Contact info</h4>
                <div className='contact-info-text'>
                  <p>office@tropicar.com</p>
                  <p>+48 000 000 000</p>
                </div>
              </div>
              <div className='submit-button-container'>
                <button className='submit-button'>
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingFormSection;
