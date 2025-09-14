import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">

        {/* Logo / Brand */}
        <div className="flex flex-col items-start">
          <h2 className="text-white text-xl font-semibold">Cozy Voyage</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Feel at home while you&apos;re away.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="/impressum" className="hover:text-white">Impressum</a></li>
              <li><a href="/agb" className="hover:text-white">AGB</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href='/privacy-policy' className="hover:text-white">Datenschutz</a></li>
            </ul>
          </div>
        </div>

        {/*/!* Socials *!/*/}
        {/*<div className="flex space-x-4">*/}
        {/*  <a href="#" aria-label="Facebook" className="hover:text-white">*/}
        {/*    <Facebook size={20} />*/}
        {/*  </a>*/}
        {/*  <a href="#" aria-label="Twitter" className="hover:text-white">*/}
        {/*    <Twitter size={20} />*/}
        {/*  </a>*/}
        {/*  <a href="#" aria-label="Instagram" className="hover:text-white">*/}
        {/*    <Instagram size={20} />*/}
        {/*  </a>*/}
        {/*  <a href="#" aria-label="LinkedIn" className="hover:text-white">*/}
        {/*    <Linkedin size={20} />*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Cozy Voyage GmbH. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
