import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white py-32 text-black">
      <div className="container mx-auto">
        <h1 className="text-black">Impressum</h1>
        <p><strong>Angaben gemäß § 5 TMG</strong></p>
        <p>
          <strong>Cozy Voyage GmbH</strong><br />
          Rheinsberger Str. 76/77<br />
          10115 Berlin<br />
          Germany
        </p>

        <h4>Vertreten durch</h4>
        <p>Eric Lehmann</p> <h4>Kontakt</h4>
        <p>
          E-Mail: <a href="mailto:info@cozy-voyage.com">info@cozy-voyage.com</a><br />
          Telefon: +49 30 15778194349
        </p>

        <h4>Registereintrag</h4>
        <p>
          Eintragung im Handelsregister.<br />
          Registergericht: Amtsgericht Berlin-Charlottenburg<br />
          Registernummer: HRB 264838 B
        </p>

        <h4>Umsatzsteuer-ID</h4>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE400020895
        </p>

        <h4>Aufsichtsbehörde</h4>
        <p>
          Bezirksamt Mitte von Berlin<br />
          Ordnungsamt Mitte - Zentrale Anlauf- und Beratungsstelle<br />
          Karl-Marx-Allee 31<br />
          10178 Berlin
        </p>

        <h4>Online-Streitbeilegung</h4>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">
            https://ec.europa.eu/consumers/odr/
          </a><br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h4>Haftung für Inhalte</h4>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich.
          Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
          fremde Informationen zu überwachen.
        </p>

        <h4>Haftung für Links</h4>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
        </p>

        <h4>Urheberrecht</h4>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht.
          Die Vervielfältigung, Bearbeitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
          bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
