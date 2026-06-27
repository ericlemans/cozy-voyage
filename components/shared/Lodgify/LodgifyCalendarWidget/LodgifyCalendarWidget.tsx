import React from 'react';
import Script from 'next/script';

type Props = {
  rentalId: string;
  locale: string;
};

const LodgifyCalendarWidget = ({ rentalId, locale }: Props) => {
  return (
    <div id="booking" style={{ scrollMarginTop: '100px' }}>
      <style>{`
                  :root {
                    --ldg-bnb-background: transparent;
                    --ldg-bnb-border-radius: 0.42em;
                    --ldg-bnb-box-shadow: 0px 24px 54px 0px rgba(0, 0, 0, 0.1);
                    --ldg-bnb-padding: 20px;
                    --ldg-bnb-input-background: #ffffff;
                    --ldg-bnb-button-border-radius: 0em;
                    --ldg-bnb-color-primary: lab(49.1882% 81.577 36.0311);
                    --ldg-bnb-color-primary-lighter: #ff9ca0;
                    --ldg-bnb-color-primary-darker: #801d21;
                    --ldg-bnb-color-primary-contrast: #ffffff;
                    --ldg-component-select-trigger-color: #3D3D3D;
                    --ldg-core-color-neutral-500: #3D3D3D;
                    --ldg-component-popover-color: #3D3D3D;
                    --ldg-component-calendar-cell-selection-bg-color: #ff3941;
                    --ldg-component-calendar-cell-selection-color: #ffffff;
                    --ldg-component-calendar-cell-selected-bg-color: #ff9ca0;
                    --ldg-component-calendar-cell-selected-color: #ffffff;
                    --ldg-bnb-font-family: inherit;
                  }
                  #lodgify-book-now-box {
                    width: 100%;
                  }
                  .css-w8txck {
                    padding-left: 12px;
                    padding-right: 12px;
                  }
                  .css-1hppjzv {
                    display: block;
                    margin-right: auto;
                  }
                  .css-fe2sc1, .css-1mwn02k p {
                    color: #fff !important;
                  }
                `}</style>
      <div
        id="lodgify-book-now-box"
        data-rental-id={rentalId}
        data-website-id="568678"
        data-slug="cozy-voyage"
        data-language-code={locale}
        data-new-tab="true"
        data-version="stable"
        data-currency-code="EUR"
        data-has-guests-breakdown=""
        data-check-in-label="Check-in"
        data-check-out-label="Check-out"
        data-guests-label="Gäste"
        data-guests-singular-label="{{NumberOfGuests}} Gast"
        data-guests-plural-label="{{NumberOfGuests}} Gäste"
        data-location-input-label="Ort"
        data-total-price-label="Gesamtpreis:"
        data-select-dates-to-see-price-label="Wählen Sie Daten aus, um den Gesamtpreis zu sehen"
        data-minimum-price-per-night-first-label="Ab"
        data-minimum-price-per-night-second-label="pro Nacht"
        data-book-button-label="Jetzt Buchen"
        data-guests-breakdown-label="Gäste"
        data-adults-label='{"one":"Erwachsener","other":"Erwachsene"}'
        data-adults-description="Alter: {minAge} oder älter"
        data-children-label='{"one":"Kind","other":"Kinder"}'
        data-children-description="Alter {minAge} – {maxAge}"
        data-children-not-allowed-label="Nicht für Kinder geeignet"
        data-infants-label='{"one":"Kleinkind","other":"Kleinkinder"}'
        data-infants-description="Unter {maxAge}"
        data-infants-not-allowed-label="Nicht für Kleinkinder geeignet"
        data-pets-label='{"one":"Haustier","other":"Haustiere"}'
        data-pets-not-allowed-label="Nicht erlaubt"
        data-done-label="Fertig"
      />
      <Script
        src="https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default LodgifyCalendarWidget;
