import React from "react";
import { useLocation } from "react-router";

export const Car = () => {
  const location = useLocation();
  const { brand, model } = location.state;
  return (
    <h1>
      {brand} {model}
    </h1>
  );
};
