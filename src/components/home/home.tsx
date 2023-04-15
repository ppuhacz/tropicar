import React, { useEffect, useState } from "react";
import getRecent from "../../services/offers/getRecent";
import backgrondPhoto from "../../img/mercedes-big-photo.avif";
import "./styles/home-styles.scss";
import useIsMobile from "../../config/is-mobile-hook";

const Home = () => {
  const [offers, setOffers] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const offersData = await getRecent(2);
      setOffers(offersData);
    };

    fetchData();
  }, []);

  console.log("offers", offers);

  return (
    <div className="home-page">
      <div className="home-page-title">
        <div className="home-page-title-photo-wrapper">
          <img
            src={backgrondPhoto}
            alt="mercedes"
            className="home-page-title-photo"
          />
        </div>
        <div className="home-page-title-text-wrapper">
          <h2 className="home-page-title-header">Exotic car rental</h2>
          <p className="home-page-title-info">
            Tropicar is a premium exotic car rental service that offers the
            ultimate driving experience in tropical destinations. With a wide
            selection of high-end sports cars, luxury convertibles, and SUVs,
            Tropicar provides the perfect ride for any occasion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
