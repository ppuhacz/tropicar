import React, { useState } from "react";
import "./styles/personal-info-form.scss";

const PersonalInfoForm = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [peselNumber, setPeselNumber] = useState<string>("");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedValue = e.target.value.replace(/\D/g, "");
    setPhoneNumber(cleanedValue);
  };

  const handlePeselNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedValue = e.target.value.replace(/\D/g, "");
    setPeselNumber(cleanedValue);
  };
  return (
    <div className='booking-personal-info'>
      <div className='input-wrapper'>
        <input type='text' id='first-name' placeholder=' ' required />
        <div className='label-wrapper'>
          <label htmlFor='first-name'>
            First name <span className='required'>*</span>
          </label>
        </div>
      </div>
      <div className='input-wrapper'>
        <input type='text' id='last-name' placeholder=' ' required />

        <div className='label-wrapper'>
          <label htmlFor='last-name'>
            Last name <span className='required'>*</span>
          </label>
        </div>
      </div>
      <div className='input-wrapper'>
        <input type='email' id='e-mail' placeholder=' ' required />

        <div className='label-wrapper'>
          <label htmlFor='e-mail'>
            E-mail address <span className='required'>*</span>
          </label>
        </div>
      </div>
      <div className='input-wrapper'>
        <input
          type='tel'
          id='phone-number'
          pattern='^\d{9,11}$'
          placeholder=' '
          required
          onChange={handlePhoneNumberChange}
          value={phoneNumber}
          maxLength={11}
        />
        <div className='label-wrapper'>
          <label htmlFor='phone-number'>
            Phone number <span className='required'>*</span>
          </label>
        </div>
      </div>
      <div className='input-wrapper'>
        <input type='text' id='address' placeholder=' ' required />
        <div className='label-wrapper'>
          <label htmlFor='address'>
            Address of permanent residence
            <span className='required'>*</span>
          </label>
        </div>
      </div>
      <div className='input-wrapper'>
        <input type='text' id='postal-code' placeholder=' ' required />
        <div className='label-wrapper'>
          <label htmlFor='postal-code'>
            Postal code <span className='required'>*</span>
          </label>
        </div>
      </div>
      <div className='input-wrapper'>
        <input type='text' id='city-town' placeholder=' ' required />

        <div className='label-wrapper'>
          <label htmlFor='city-town'>
            City/town <span className='required'>*</span>
          </label>
        </div>
      </div>
      <div className='input-wrapper'>
        <input
          type='text'
          id='pesel'
          placeholder=' '
          pattern='[0-9]{11}'
          onChange={handlePeselNumberChange}
          value={peselNumber}
          maxLength={11}
        />
        <div className='label-wrapper'>
          <label htmlFor='pesel' id='pesel-label'>
            PESEL
          </label>
        </div>
      </div>
      <small>
        <span className='required'>*</span> - required
      </small>
    </div>
  );
};

export default PersonalInfoForm;
