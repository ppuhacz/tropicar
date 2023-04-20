import React, { useEffect, useState } from "react";

import getRecent from "../../services/offers/getRecent";

const Fleet = () => {
  const [offers, setOffers] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const offersData = await getRecent(); // fetching 5 of the most recent offers
      setOffers(offersData);
    };

    fetchData();
  }, []);
};
