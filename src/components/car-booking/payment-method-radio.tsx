import React, { useState } from "react";
import { PersonalInfoFormProps } from "./types/info-form-props-interface";
import "./styles/payment-method-radio-styles.scss";
import CashAndCardIcon from "../../img/cash-and-card-payment-icon.svg";
import tickIcon from "../../img/rectangular-tick-icon.svg";

const PaymentMethodRadio = ({ register, errors }: PersonalInfoFormProps) => {
  const [paymentMethod, setPaymentMethod] = useState<string>("online");
  const [creditCardNumber, setCreditCardNumber] = useState<string>("");
  const [expirationDate, setExpirationDate] = useState<string>("");
  const [securityCode, setSecurityCode] = useState<string>("");

  const handleChange = (value: string) => {
    setPaymentMethod(value);
  };

  const handleCreditCardNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cleanedValue: string = e.target.value.replace(/\D/g, ""); // Removes any non-digit numbers
    const groupedValue: RegExpMatchArray | null = cleanedValue.match(/.{1,4}/g);
    const formattedValue: string = groupedValue
      ? groupedValue.join("-")
      : cleanedValue;
    setCreditCardNumber(formattedValue);
  };

  const handleExpirationDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cleanedValue: string = e.target.value.replace(/\D/g, ""); // Removes any non-digit numbers
    const groupedValue: RegExpMatchArray | null = cleanedValue.match(/.{1,2}/g);

    if (groupedValue && groupedValue[1]?.length > 0) {
      let month: number | string = Number(groupedValue[0]);
      let year = groupedValue[1];

      if (month > 12) {
        month = 12;
      } else if (month < 1) {
        month = 1;
      }

      if (month < 10) {
        month = "0" + month;
      }

      const formattedValue: string = `${month} / ${year}`;
      setExpirationDate(formattedValue);
    } else {
      setExpirationDate(cleanedValue);
    }
  };

  const handleSecurityCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedValue: string = e.target.value.replace(/\D/g, "");
    setSecurityCode(cleanedValue);
  };

  const onlinePaymentForm = (
    <div className='online-payment-form'>
      <div className='input-wrapper'>
        <input
          type='tel'
          id='credit-card-number'
          placeholder=' '
          required
          pattern='[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}'
          value={creditCardNumber}
          {...register("creditCardNumber", { required: true })}
          onChange={handleCreditCardNumberChange}
          maxLength={19}
        />
        <div className='label-wrapper'>
          <label htmlFor='credit-card-number'>
            Credit card number <span className='required'>*</span>
          </label>
        </div>
      </div>
      <div className='input-wrapper'>
        <input
          type='tel'
          id='credit-card-expiration-date'
          placeholder=' '
          required
          value={expirationDate}
          {...register("creditCardExpirationDate", { required: true })}
          onChange={handleExpirationDateChange}
          pattern='[0-9]{2} / [0-9]{2}'
          maxLength={7}
        />
        <div className='label-wrapper'>
          <label htmlFor='credit-card-expiration-date'>
            Expiration date (mm/yy) <span className='required'>*</span>
          </label>
        </div>
      </div>
      <div className='input-wrapper'>
        <input
          type='tel'
          id='credit-card-security-code'
          placeholder=' '
          required
          pattern='[0-9]{3}'
          maxLength={3}
          {...register("creditCardSecurityCode", { required: true })}
          onChange={handleSecurityCodeChange}
          value={securityCode}
        />
        <div className='label-wrapper'>
          <label htmlFor='credit-card-security-code'>
            CVV/CVC <span className='required'>*</span>
          </label>
        </div>
      </div>
    </div>
  );

  const paymentUponDelivery = (
    <div className='payment-upon-delivery-container'>
      <div className='payment-upon-delivery-wrapper'>
        <div className='payment-upon-delivery-icon'>
          <img
            src={CashAndCardIcon}
            alt='cash-and-card-payment'
            className='cash-and-card-payment-icon'
          />
        </div>
        <div className='payment-upon-delivery-info'>
          In tropicar's office we accept both credit card and cash payments
        </div>
      </div>
    </div>
  );

  return (
    <div className='booking-form-payment-method-wrapper'>
      <div className='radio-container'>
        <div className='radio-wrapper'>
          <input
            type='radio'
            value='Online payment'
            id='online'
            {...register("paymentMethod")}
            onChange={() => handleChange("online")}
            defaultChecked
          />
          <label htmlFor='online'>
            <span>Online payment (Credit card)</span>
            <img src={tickIcon} alt='tick icon' className='radio-tick-icon' />
          </label>
        </div>
        <div className='radio-wrapper'>
          <input
            type='radio'
            value='Delivery'
            id='delivery'
            {...register("paymentMethod")}
            onChange={() => handleChange("delivery")}
          />
          <label htmlFor='delivery'>
            <span>Payment upon delivery</span>
            <img src={tickIcon} alt='tick icon' className='radio-tick-icon' />
          </label>
        </div>
      </div>
      {paymentMethod === "online" ? onlinePaymentForm : paymentUponDelivery}
    </div>
  );
};

export default PaymentMethodRadio;
