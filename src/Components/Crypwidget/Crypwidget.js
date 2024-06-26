import React, { useEffect } from 'react';

const CryptoRankWidget = () => {
  useEffect(() => {
    // Load the CryptoRank widget script
    const script = document.createElement('script');
    script.src = "https://cryptorank.io/widget/marquee.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="cr-widget-marquee"
      data-coins="bitcoin,ethereum,tether,ripple,cardano"
      data-theme="dark"
      data-show-symbol="true"
      data-show-icon="true"
      data-show-period-change="true"
      data-period-change="24H"
      data-api-url="https://api.cryptorank.io/v0"
    >
      <a href="https://cryptorank.io">Coins by Cryptorank</a>
    </div>
  );
};

export default CryptoRankWidget;
