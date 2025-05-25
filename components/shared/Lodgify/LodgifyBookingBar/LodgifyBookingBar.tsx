'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

const LodgifyBookingBar = ({rentalId}: {rentalId: string}) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      :root {
      --ldg - bnb - background: #ffffff;
      --ldg-bnb-border-radius: 0.42em;
      --ldg-bnb-box-shadow: 0px 24px 54px 0px rgba(0, 0, 0, 0.1);
      --ldg-bnb-padding: 14px;
      --ldg-bnb-input-background: #ffffff;
      --ldg-bnb-button-border-radius: 3.58em;

      --ldg-bnb-color-primary: #ff1d48;
      --ldg-bnb-color-primary-lighter:#ff8ea4;
      --ldg-bnb-color-primary-darker: #800f24;
      --ldg-bnb-color-primary-contrast: #ffffff;
      --ldg-component-calendar-cell-selection-bg-color: #ff1d48;
      --ldg-component-calendar-cell-selection-color: #ffffff;
      --ldg-component-calendar-cell-selected-bg-color: #ff8ea4;
      --ldg-component-calendar-cell-selected-color: #ffffff;
      --ldg-bnb-font-family: inherit;
    }
      #lodgify-book-now-box {
      width: 100%;
    }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      <Script src="https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js" defer />
      <div
        id="lodgify-book-now-box"
        data-rental-id={rentalId}
        data-website-id="568678"
        data-slug="cozy-voyage"
        data-language-code="de"
        data-new-tab="true"
        data-version="stable"


        data-has-guests-breakdown

        data-check-in-label="Check-in"
        data-check-out-label="Check-out"
        data-guests-label="Gäste"
        data-guests-singular-label="{{NumberOfGuests}} Gast"
        data-guests-plural-label="{{NumberOfGuests}} Gäste"
        data-location-input-label="Ort"
        data-total-price-label="Gesamtpreis:"
        data-select-dates-to-see-price-label="Wählen Sie Daten aus, um den Gesamtpreis zu sehen"
        data-minimum-price-per-night-first-label="Ab"
        data-minimum-price-per-night-second-label='pro Nacht'
        data-book-button-label='Jetzt Buchen'
        data-guests-breakdown-label='Gäste'
        data-adults-label='{"one":"Erwachsener","other":"Erwachsene"}'
        data-adults-description='Alter: {minAge} oder älter'
        data-children-label='{"one":"Kind","other":"Kinder"}'
        data-children-description='Alter {minAge} – {maxAge}'
        data-children-not-allowed-label='Nicht für Kinder geeignet'
        data-infants-label='{"one":"Kleinkind","other":"Kleinkinder"}'
        data-infants-description='Unter {maxAge}'
        data-infants-not-allowed-label='Nicht für Kleinkinder geeignet'
        data-pets-label='{"one":"Haustier","other":"Haustiere"}'
        data-pets-not-allowed-label='Nicht erlaubt'
        data-done-label='Fertig'

      ></div>

    </div>
  );
};

export default LodgifyBookingBar;
