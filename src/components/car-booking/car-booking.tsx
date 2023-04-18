import React from "react";
import { useLocation } from "react-router";

export const CarBooking = () => {
  const location = useLocation();
  const { brand, model } = location.state;
  return (
    <h1>
      Chosen car booking: {brand} {model}
    </h1>
  );
};
