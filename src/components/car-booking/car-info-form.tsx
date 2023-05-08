import React, { useState } from "react";
import "./styles/car-info-form-styles.scss";
import { CarInfoType } from "./types/car-info-form-interface";

const CarInfoForm = ({ carInfo }: CarInfoType) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const { brand, model, photo1, pricePerDay, deposit, dailyMileageLimitKM } =
    carInfo;
  console.log(carInfo);

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
    if (endDate && new Date(endDate) < new Date(e.target.value)) {
      setEndDate("");
    }
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
    if (startDate && new Date(startDate) > new Date(e.target.value)) {
      setStartDate("");
    }
  };

  const calculateDays = (): number => {
    if (startDate && endDate) {
      const start: Date = new Date(startDate);
      const end: Date = new Date(endDate);
      const timeDiff: number = Math.abs(end.getTime() - start.getTime());
      const diffDays: number = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return diffDays + 1;
    }
    return 0;
  };

  const calculateRate = (): number => {
    const days: number = calculateDays();

    if (days <= 3) {
      return 1.5;
    } else if (days <= 6) {
      return 1.3;
    } else if (days <= 14) {
      return 1.2;
    } else if (days < 31) {
      return 1.15;
    } else return 1;
  };

  const calculatePricePerDay = (): number => {
    const defaultPrice: number = pricePerDay;
    const rate: number = calculateRate();
    return defaultPrice * rate;
  };

  const calculatePrice = (): string | number => {
    if (startDate && endDate) {
      const price: number = calculatePricePerDay();
      const days: number = calculateDays();
      const totalPrice: number = price * days;
      return (totalPrice + deposit).toFixed(2);
    }
    return 0;
  };

  return (
    <div className='car-info-form-wrapper'>
      <div className='car-info-form-cover'>
        <img src={photo1} alt='car-cover' width='100%' />
        <h3>
          {brand} {model}
        </h3>
      </div>
      <div className='date-range-picker'>
        <input
          type='date'
          id='start-date'
          value={startDate}
          onChange={handleStartDateChange}
        />
        <input
          type='date'
          id='end-date'
          value={endDate}
          onChange={handleEndDateChange}
          min={startDate}
        />
      </div>
      <div className='car-info-form-details-wrapper'>
        <div className='car-info-form-details'>
          Price per day: <span>€{calculatePricePerDay().toFixed(2)}</span>
        </div>
        <div className='car-info-form-details'>
          Total days: <span>{calculateDays()}</span>
        </div>
        <div className='car-info-form-details'>
          Refundable deposit: <span>€{deposit}</span>
        </div>
        <div className='car-info-form-details'>
          Total mileage limit:
          <span>{Number(calculateDays()) * dailyMileageLimitKM} km</span>
        </div>
        <div className='car-info-form-details'>
          Total price: <span>€{calculatePrice()}</span>
        </div>
      </div>
    </div>
  );
};

export default CarInfoForm;
