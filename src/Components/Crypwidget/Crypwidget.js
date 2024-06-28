import React from 'react';
import { Helmet } from 'react-helmet';

const CoinGeckoWidget = () => {
  return (
    <div>
      <Helmet>
        <script src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js"></script>
      </Helmet>
      <gecko-coin-price-marquee-widget
        locale="en"
        dark-mode="true"
        transparent-background="false"
        coin-ids="bitcoin,ethereum"
        initial-currency="usd">
      </gecko-coin-price-marquee-widget>
    </div>
  );
};

export default CoinGeckoWidget;
