import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import FleetPage from "../pages/fleet-page";
import PageNotFoundPage from "../pages/page-not-found";
import ContactPage from "../pages/contact-page";
import LoginPage from "../pages/login-page";
import BookingPage from "../pages/booking-page";
import CarPage from "../pages/car-page";
import CarBookingPage from "../pages/booking-car-page";

const router: object = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <PageNotFoundPage />,
  },
  {
    path: "/fleet",
    element: <FleetPage />,
  },
  {
    path: "/offer/:id",
    element: <CarPage />,
  },
  {
    path: "/contact-us",
    element: <ContactPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
  {
    path: "/booking/:id",
    element: <CarBookingPage />,
  },
]);

export default router;
