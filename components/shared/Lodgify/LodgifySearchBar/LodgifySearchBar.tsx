'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

const LodgifySearchBar = () => {

  useEffect(() => {
    // You can append styles to the document head if you want to avoid global CSS files
    const style = document.createElement('style');
    style.innerHTML = `
      :root {
        --ldg-psb-background: #ffffff;
        --ldg-psb-border-radius: 0.42em;
        --ldg-psb-box-shadow: 0px 24px 54px 0px rgba(0, 0, 0, 0.1);
        --ldg-psb-padding: 14px;
        --ldg-psb-input-background: #ffffff;
        --ldg-psb-button-border-radius: 3.58em;
        --ldg-psb-color-primary: #e11d47;
        --ldg-psb-color-primary-lighter: #e11d47;
        --ldg-psb-color-primary-darker: #7d6300;
        --ldg-psb-color-primary-contrast: #fff;
        --ldg-semantic-color-primary:  #fac600;
        --ldg-semantic-color-primary-lighter: #fde380;
        --ldg-semantic-color-primary-darker: #7d6300;
        --ldg-semantic-color-primary-contrast: #333333;
        --ldg-component-modal-z-index: 999;
      }
      #lodgify-search-bar {
        position: relative;
        z-index: 999;
        width: 100%;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);


  return (
    <>
      <Script src='https://app.lodgify.com/portable-search-bar/stable/renderPortableSearchBar.js' defer />
      <div
        id='lodgify-search-bar'
        data-website-id="568678"
        data-language-code="en"
        data-search-page-url="https://cozy-voyage.com/en/4578016/all-objects"

        data-dates-check-in-label="Check-in"
        data-dates-check-out-label="Check-out"
        data-guests-counter-label="Guests"
        data-guests-input-singular-label="{{NumberOfGuests}} guest"
        data-guests-input-plural-label="{{NumberOfGuests}} guests"
        data-location-input-label="Location"
        data-search-button-label="Search"
        data-dates-input-min-stay-tooltip-text='{"one":"Minimum {minStay} night","other":"Minimum {minStay} nights"}'
        data-guests-breakdown-label="Guests"
        data-adults-label='{"one":"adult","other":"adults"}'
        data-adults-description="Ages {minAge} or above"
        data-children-label='{"one":"child","other":"children"}'
        data-children-description="Ages {minAge}-{maxAge}"
        data-children-not-allowed-label="Not suitable for children"
        data-infants-label='{"one":"infant","other":"infants"}'
        data-infants-description="Under {maxAge}"
        data-infants-not-allowed-label="Not suitable for infants"
        data-pets-label='{"one":"pet","other":"pets"}'
        data-pets-not-allowed-label="Not allowed"
        data-done-label="Done"

        data-new-tab="true"
        data-version="stable"
        data-has-guests-breakdown

      />
    </>

  );
};

export default LodgifySearchBar;
