import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import FleetPage from "../pages/fleet-page";
import PageNotFoundPage from "../pages/page-not-found";
import ContactPage from "../pages/contact-page";
import CarPage from "../pages/car-page";
import CarBookingPage from "../pages/booking-car-page";
import TermsOfServicePage from "../pages/term-of-service-page";

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
    path: "/booking/:id",
    element: <CarBookingPage />,
  },
  {
    path: "/terms-of-service",
    element: <TermsOfServicePage />,
  },
]);

export default router;
