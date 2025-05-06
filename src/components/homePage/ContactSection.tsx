import React from "react";
import locationIcon from "../../assets/icons/location-icon.png";
import phoneIcon from "../../assets/icons/phone-calling-icon.png";
import telegramIcon from "../../assets/icons/telegram-icon.png";
import twitterIcon from "../../assets/icons/twitter-icon.png";
import linkdinIcon from "../../assets/icons/linkdin-icon.png";
import { FaEnvelope } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-black text-white pb-12 md:pt-12 md:px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-center">
        <div className="w-full md:flex-1 bg-[#121317] p-10 rounded-lg">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl mb-6 text-center">
            Contact
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border-b border-white text-white placeholder-white opacity-60 focus:outline-none py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-white text-white placeholder-white opacity-60 focus:outline-none py-2"
            />
            <textarea
              placeholder="Message"
              className="bg-transparent border-b border-white text-white placeholder-white opacity-60 focus:outline-none py-2 h-10 resize-none"
            />
            <button className="bg-transparent border border-white px-5 py-2 rounded font-semibold mt-8 w-full">
              SEND
            </button>
          </form>
        </div>

        <div className="flex-1 text-sm md:text-base space-y-6">
          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-white h-8 w-8" />
            <a
              href="mailto:info@basta-group.com"
              className="uppercase text-white hover:underline"
            >
              <strong className="opacity-60">Email:</strong>{" "}
              info@basta-group.com
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <img src={locationIcon} alt="Location Icon" className="w-8 h-8" />
            <a
              href="https://www.google.com/maps/place/Sliema,+Malta"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-white hover:underline"
            >
              <strong className="opacity-60">HQ:</strong> Sliema, Malta
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <img src={phoneIcon} alt="Phone Icon" className="w-8 h-8" />
            <a
              href="tel:+356XXXXXXX"
              className="uppercase text-white hover:underline"
            >
              <strong className="opacity-60">Phone:</strong> +356 XXX XXXX
            </a>
          </div>

          {/* Social Media */}
          <div className="mt-6">
            <p className="uppercase mb-3 font-semibold text-xl">
              Social Media Link
            </p>
            <div className="flex gap-4">
              {[telegramIcon, twitterIcon, linkdinIcon].map((icon, i) => (
                <a
                  href="#"
                  key={i}
                  className="w-10 h-10 bg-[#2a2b2e] rounded-full flex items-center justify-center hover:opacity-100 opacity-60 transition-opacity duration-200"
                >
                  <img src={icon} alt="Social Icon" className="w-10 h-10" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
