import React from "react";
import { FOOTER_DATA } from "../../db/data";

const Footer: React.FC = () => {
  return (
    <section className="bg-white  px-2 py-2" id="footer">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl sm:mx-auto py-4 mx-2">

        {/* Box 1 - Logo & Social */}
        <div>
          <img src={FOOTER_DATA.logo} alt="logo" className="w-20 sm:w-30 h-auto sm:-mt-4" />
          <p className="card_description py-2">
            {FOOTER_DATA.description}
          </p>
        </div>

        {/* Box 3 - Quick Links */}
        <div>
          <h3 className="text-xl text-[#130F40] pb-2 sm:pb-4">Quick Links</h3>
          {FOOTER_DATA.quickLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="group block text-gray-600 py-[3px] hover:text-orange-600"
            >
              <span className="transform transition-transform duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Box 2 - Contact Info */}
        <div>
          <h3 className="text-xl text-[#130F40] pb-2 sm:pb-4">Contact Info</h3>
          {FOOTER_DATA.contactInfo.map(({ label, href }, i) => (
            <a
              key={i}
              href={href}
              className="block text-gray-600 py-[3px] lowercase"
            >

              {label}
            </a>
          ))}
        </div>

        {/* Box 4 - Newsletter */}
        <div>
          <h3 className="text-xl text-[#130F40] pb-2 sm:pb-4">Newsletter</h3>
          <p className="text-gray-600 leading-relaxed pb-4">
            subscribe for latest updates
          </p>
          <input
            type="email"
            placeholder="your email"
            className="w-full mb-3 px-4 py-2 rounded-md bg-gray-200 text-base text-gray-800 outline-none"
          />
          <input
            type="submit"
            value="subscribe"
            className="px-6 py-2 bg-orange-600 text-white rounded-md cursor-pointer hover:bg-orange-700"
          />
        </div>
      </div>

      {/* Footer Credit */}
      <div className="text-center text-sm sm:text-base border-t border-gray-300 pt-3  text-gray-800">
        created by <span className="text-orange-600">Jugendra Gangwar</span> | all rights reserved
      </div>
    </section>
  );
};

export default Footer;
