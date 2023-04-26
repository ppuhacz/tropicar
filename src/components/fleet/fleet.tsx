import React, { useEffect, useState } from "react";
// importing other components
import getRecent from "../../services/offers/getRecent";
import OffersPanels from "../offer-panels/offers-panels";
import LoadingCircle from "../loading-circle/loading-cricle";
import fleetText from "./data/our-fleet-info";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
// importing types
import { Offer } from "./types/fleet-interface";
// importing styles
import "./styles/fleet-styles.scss";
//importing images
import verticalLine from "../../img/vertical-line.svg";

const Fleet = () => {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const offersData: any = await getRecent();
      setOffers(offersData);
    };

    fetchData();
  }, []);

  return (
    <div className='fleet-page'>
      <section id='our-fleet'>
        <div className='fleet-page-our-fleet'>
          <span>
            <img
              src={verticalLine}
              alt='vertical line'
              className='vertical-line'
            />
            <h1>Our fleet</h1>
          </span>
        </div>
        {offers.length > 0 ? (
          <OffersPanels offers={offers} />
        ) : (
          <LoadingCircle />
        )}
      </section>
      <section id='our-fleet-info'>
        <div className='our-fleet-info-container'>
          <div className='our-fleet-info-text-1'>{fleetText[0].text}</div>
          <br />
          <div className='our-fleet-info-text-2'>{fleetText[1].text}</div>
        </div>
      </section>
    </div>
  );
};

const ScrolledFleet = ScrollToTop(Fleet);

export default ScrolledFleet;
