import React from "react";
import verticalLine from "../../../img/vertical-line.svg";
import "../styles/contact-form-styles.scss";

// This form can be easily linked to sendgrid by adding a submit handler
// However, for the sake of the project, I will not include it here so my email doesn't get spammed

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
            <h3>Got more questions?</h3>
          </span>
        </div>
        <div className='booking-form-wrapper'>
          <div className='booking-form'>
            <p className='booking-form-info'>
              If you've got more questions about this car feel free to contact
              us!
            </p>
            <div className='booking-form-and-contact-info-wrapper'>
              <form id='car-offer-booking-form'>
                <div className='booking-form-wrapper'>
                  <div className='booking-form-input'>
                    <input
                      type='email'
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
                </div>
                <div className='contact-info-container'>
                  <div className='contact-info-wrapper'>
                    <h4>Contact info</h4>
                    <div className='contact-info-text'>
                      <p>office@tropicar.com</p>
                      <p>+48 000 000 000</p>
                    </div>
                  </div>
                </div>
                <div className='submit-button-container'>
                  <button className='submit-button' type='submit'>
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingFormSection;
