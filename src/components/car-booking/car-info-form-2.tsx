import React, { useEffect, useState } from "react";
import "./styles/car-info-form-styles.scss";
import { CarInfoType } from "./types/car-info-form-interface";

const CarInfoForm = ({ carInfo, register, errors }: CarInfoType) => {
  const { brand, model, photo1, pricePerDay, deposit, dailyMileageLimitKM } =
    carInfo;
  const [calculatedPricePerDay, setCalculatedPricePerDay] = useState<
    string | number
  >(0);
  const [totalPrice, setTotalPrice] = useState<string | number>(0);
  const [totalDays, setTotalDays] = useState<string | number>(0);
  const [totalMileageLimit, setTotalMileageLimit] = useState<string | number>(
    0
  );

  const handleStartDateValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartDateValue(e.target.value);
  };

  const handleEndDateValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDateValue(e.target.value);
  };

  const calculateDays = (): number => {
    if (startDateValue && endDateValue) {
      const start: Date = new Date(startDateValue);
      const end: Date = new Date(endDateValue);
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
    if (startDateValue && endDateValue) {
      const price: number = calculatePricePerDay();
      const days: number = calculateDays();
      const totalPrice: number = price * days;
      setTotalPrice(price);
      register("totalPrice", { value: totalPrice });
      return (totalPrice + deposit).toFixed(2);
    }
    return 0;
  };

  const [startDateValue, setStartDateValue] = useState<string>("");
  const [endDateValue, setEndDateValue] = useState<string>("");

  useEffect(() => {
    const pricePerDay = calculatePricePerDay();
    setCalculatedPricePerDay(pricePerDay);

    const price = calculatePrice();
    setTotalPrice(price);
    register("totalPrice", { value: totalPrice });

    const days = calculateDays();
    setTotalDays(days);

    const mileageLimit = days * dailyMileageLimitKM;
    setTotalMileageLimit(mileageLimit);
  }, [startDateValue, endDateValue, dailyMileageLimitKM, deposit, pricePerDay]);

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
          value={startDateValue}
          {...register("startDate", { required: true })}
          onChange={handleStartDateValueChange}
        />
        <input
          type='date'
          id='end-date'
          value={endDateValue}
          min={startDateValue}
          {...register("endDate", { required: true })}
          onChange={handleEndDateValueChange}
        />
      </div>
      <div className='car-info-form-details-wrapper'>
        <div className='car-info-form-details'>
          Price per day:
          <span>
            <input
              type='text'
              value={`€${calculatedPricePerDay}`}
              {...register("pricePerDay")}
              readOnly
            />
          </span>
        </div>
        <div className='car-info-form-details'>
          Total days:
          <span>
            <input
              type='text'
              value={totalDays}
              {...register("totalDays")}
              readOnly
            />
          </span>
        </div>
        <div className='car-info-form-details'>
          Refundable deposit:
          <span>
            <input
              type='text'
              value={`€${deposit}`}
              {...register("deposit")}
              readOnly
            />
          </span>
        </div>
        <div className='car-info-form-details'>
          Total mileage limit:
          <span>
            <input
              type='text'
              value={`${totalMileageLimit} km`}
              {...register("totalMileageLimit")}
              readOnly
            />
          </span>
        </div>
        <div className='car-info-form-details'>
          Total price:
          <span>
            <input
              type='text'
              value={`€${totalPrice}`}
              {...register("totalPrice")}
              readOnly
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarInfoForm;
