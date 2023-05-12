import React, { useState } from "react";
import { PersonalInfoFormProps } from "./types/info-form-props-interface";
import "./styles/personal-info-form.scss";

const PersonalInfoForm = ({ register }: PersonalInfoFormProps) => {
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
        <input
          type='text'
          id='first-name'
          placeholder=' '
          required
          {...register("firstName", { required: "test" })}
        />
        <div className='label-wrapper'>
          <label htmlFor='first-name'>
            First name <span className='required'>*</span>
          </label>
        </div>
      </div>
      <div className='input-wrapper'>
        <input
          type='text'
          id='last-name'
          placeholder=' '
          required
          {...register("lastName", { required: true })}
        />

        <div className='label-wrapper'>
          <label htmlFor='last-name'>
            Last name <span className='required'>*</span>
          </label>
        </div>
      </div>
      <div className='input-wrapper'>
        <input
          type='email'
          id='e-mail'
          placeholder=' '
          required
          {...register("email", { required: true })}
        />

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
          value={phoneNumber}
          maxLength={11}
          {...register("phoneNumber", { required: true })}
          onChange={handlePhoneNumberChange}
        />
        <div className='label-wrapper'>
          <label htmlFor='phone-number'>
            Phone number <span className='required'>*</span>
          </label>
        </div>
      </div>
      <div className='input-wrapper'>
        <input
          type='text'
          id='address'
          placeholder=' '
          required
          {...register("address", { required: true })}
        />
        <div className='label-wrapper'>
          <label htmlFor='address'>
            Address of permanent residence
            <span className='required'>*</span>
          </label>
        </div>
      </div>
      <div className='input-wrapper'>
        <input
          type='text'
          id='postal-code'
          placeholder=' '
          required
          {...register("postalCode", { required: true })}
        />
        <div className='label-wrapper'>
          <label htmlFor='postal-code'>
            Postal code <span className='required'>*</span>
          </label>
        </div>
      </div>
      <div className='input-wrapper'>
        <input
          type='text'
          id='city-town'
          placeholder=' '
          required
          {...register("cityTown", { required: true })}
        />

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
          value={peselNumber}
          maxLength={11}
          {...register("pesel")}
          onChange={handlePeselNumberChange}
        />
        <div className='label-wrapper'>
          <label htmlFor='pesel' id='pesel-label'>
            PESEL
          </label>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
