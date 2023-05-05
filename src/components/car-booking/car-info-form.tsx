import React, { useState } from "react";
import "./styles/car-info-form-styles.scss";
import { CarInfoType } from "./types/car-info-form-interface";

const CarInfoForm = ({ carInfo }: CarInfoType) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

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

  // Maybe make it use state hook??

  const calculateDays = () => {
    if (startDate && endDate) {
      const start: Date = new Date(startDate);
      const end: Date = new Date(endDate);
      const timeDiff: number = Math.abs(end.getTime() - start.getTime());
      const diffDays: number = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return diffDays + 1;
    }
    return 0;
  };

  const calculatePrice = () => {
    if (startDate && endDate) {
      const price = pricePerDay;
      const days = calculateDays();
      const totalPrice = price * days;
      return totalPrice;
    }
    return 0;
  };

  const { brand, model, photo1, pricePerDay, status } = carInfo;

  const isAvailable = status === "Available";

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
          Price per day: <span>{pricePerDay}</span>
        </div>
        <div className='car-info-form-details'>
          Total days: <span>{calculateDays()}</span>
        </div>
        <div className='car-info-form-details'>
          Total price: <span>{calculatePrice()}</span>
        </div>
      </div>
    </div>
  );
};

export default CarInfoForm;
