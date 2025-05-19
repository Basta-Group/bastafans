import React, { useState } from "react";
import telegramIcon from "../../assets/icons/telegram-icon.png";
import twitterIcon from "../../assets/icons/twitter-icon.png";
import linkdinIcon from "../../assets/icons/linkdin-icon.png";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import ContactImg from "../../assets/contact-us-img.png";

interface ContactSectionProps {
  theme?: "dark" | "light";
  className?: string;
  isSpecialLayout?: boolean; // New prop to toggle layout
}

const ContactSection: React.FC<ContactSectionProps> = ({
  theme = "dark",
  className = "",
  isSpecialLayout = false, // Default to false to maintain existing behavior
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isDark = theme === "dark";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("http://localhost:3002/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to send message",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Theme-based classes
  const bgClass = isDark ? "bg-black" : "bg-white";
  const textClass = isDark ? "text-white" : "text-black";
  const cardBgClass = "bg-[#121317]";
  const placeholderClass = isDark ? "placeholder-white" : "placeholder-white";
  const inputTextClass = isDark ? "text-white" : "text-white";
  const inputBorderClass = isDark ? "border-white" : "border-white";
  const buttonBgClass = "bg-transparent hover:bg-white hover:text-black";
  const buttonTextClass = "text-white";
  const buttonBorderClass = "border-white";
  const iconBgClass = "bg-[#28292C]";
  const iconOpacity = "opacity-100";

  // Common form JSX to avoid repetition
  const contactForm = (
    <div className={`w-full md:w-1/2 ${cardBgClass} p-6 rounded-lg`}>
      <h2 className="text-3xl lg:text-4xl xl:text-5xl mb-6 text-center text-white">
        Contact
      </h2>
      {status.message && (
        <div
          className={`mb-4 p-3 rounded ${
            status.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className={`bg-transparent border-b ${inputBorderClass} ${inputTextClass} ${placeholderClass} opacity-60 focus:outline-none py-2`}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className={`bg-transparent border-b ${inputBorderClass} ${inputTextClass} ${placeholderClass} opacity-60 focus:outline-none py-2`}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className={`bg-transparent border-b ${inputBorderClass} ${inputTextClass} ${placeholderClass} opacity-60 focus:outline-none py-2 h-24 resize-none`} // Increased height for message box
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${buttonBgClass} ${buttonTextClass} ${buttonBorderClass} border px-5 py-2 rounded font-semibold mt-8 w-full transition-colors duration-200 disabled:opacity-50`}
          title="Send message"
          aria-label="Send message"
        >
          {isSubmitting ? "SENDING..." : "SEND"}
        </button>
      </form>
    </div>
  );

  return isSpecialLayout ? (
    <section
      className={`${bgClass} ${textClass} pb-12 pt-3 md:pt-12 px-3 md:px-6 ${className}`}
    >
      {" "}
      <div className="max-w-7xl mx-auto text-center pb-6 border-b border-[#D9D9D9] mb-10">
        {" "}
        <h2 className="text-4xl md:text-5xl text-white uppercase">
          Discover What We Can Do For You
        </h2>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 items-start">
        {/* Left side: Image and Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <img
            src={ContactImg}
            alt="Person working on laptop"
            className="w-full h-auto rounded-lg"
          />
          <p className="text-white text-sm md:text-base">
            Are you looking for WMS experts that can help you on your journey to
            success? Learn more about our services and available solutions to
            optimize your logistics operations.
          </p>
          <p className="text-white text-sm md:text-base mb-0">
            Send us your questions, concerns, or feedback, and we'll reach out
            to you within 24 hours.
          </p>
          <div className="flex-1 text-sm md:text-base space-y-6">
            <div className="flex items-center gap-3">
              <FaEnvelope
                className={`${textClass} h-8 w-8`}
                aria-label="Email Icon"
                title="Email Icon"
              />
              <a
                href="mailto:info@basta-group.com"
                className={`uppercase ${textClass} hover:underline`}
                title="Send email to info@basta-group.com"
                aria-label="Send email to info@basta-group.com"
              >
                <strong className="opacity-60">Email:</strong>{" "}
                info@basta-group.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt
                className={`${textClass} h-8 w-8`}
                aria-label="Location Icon"
                title="Location Icon"
              />
              <a
                href="https://www.google.com/maps/place/Loyola+House/@35.9161209,14.441071,17z/data=!3m1!4b1!4m6!3m5!1s0x130e4fc36e3fffff:0x48a19a88e2bbcc78!8m2!3d35.9161209!4d14.4442185!16s%2Fg%2F11sscs69xq?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={`uppercase ${textClass} hover:underline`}
                title="View location on Google Maps"
                aria-label="View location on Google Maps"
              >
                <strong className="opacity-60">Registered Office:</strong> 16,
                Triq il-Markiż Scicluna, Naxxar, NXR 2069, Malta
              </a>
            </div>
          </div>
        </div>

        {/* Right side: Contact Form */}
        {contactForm}
      </div>
    </section>
  ) : (
    <section
      className={`${bgClass} ${textClass} pb-12 pt-3 md:pt-12 px-3 md:px-6 ${className}`}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-center">
        {contactForm}
        <div className="flex-1 text-sm md:text-base space-y-6">
          <div className="flex items-center gap-3">
            <FaEnvelope
              className={`${textClass} h-8 w-8`}
              aria-label="Email Icon"
              title="Email Icon"
            />
            <a
              href="mailto:info@basta-group.com"
              className={`uppercase ${textClass} hover:underline`}
              title="Send email to info@basta-group.com"
              aria-label="Send email to info@basta-group.com"
            >
              <strong className="opacity-60">Email:</strong>{" "}
              info@basta-group.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt
              className={`${textClass} h-8 w-8`}
              aria-label="Location Icon"
              title="Location Icon"
            />
            <a
              href="https://www.google.com/maps/place/Loyola+House/@35.9161209,14.441071,17z/data=!3m1!4b1!4m6!3m5!1s0x130e4fc36e3fffff:0x48a19a88e2bbcc78!8m2!3d35.9161209!4d14.4442185!16s%2Fg%2F11sscs69xq?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className={`uppercase ${textClass} hover:underline`}
              title="View location on Google Maps"
              aria-label="View location on Google Maps"
            >
              <strong className="opacity-60">Registered Office:</strong> 16,
              Triq il-Markiż Scicluna, Naxxar, NXR 2069, Malta
            </a>
          </div>
          {/* Phone */}
          {/* <div className="flex items-center gap-3">
            <img src={phoneIcon} alt="Phone Icon" className="w-8 h-8" />
            <a
              href="tel:+356XXXXXXX"
              className="uppercase text-white hover:underline"
            >
              <strong className="opacity-60">Phone:</strong> +356 XXX XXXX
            </a>
          </div> */}

          <div className="mt-6">
            <p className="mb-3 font-semibold text-xl">Social Media Link</p>
            <div className="flex gap-4">
              {[telegramIcon, twitterIcon, linkdinIcon].map((icon, i) => (
                <a
                  href="#"
                  key={i}
                  className={`w-10 h-10 ${iconBgClass} rounded-full flex items-center justify-center hover:opacity-100 ${iconOpacity} transition-opacity duration-200`}
                  title={
                    i === 0 ? "Telegram" : i === 1 ? "Twitter" : "LinkedIn"
                  }
                  aria-label={
                    i === 0 ? "Telegram" : i === 1 ? "Twitter" : "LinkedIn"
                  }
                >
                  <img
                    src={icon}
                    alt={
                      i === 0
                        ? "Telegram Icon"
                        : i === 1
                        ? "Twitter Icon"
                        : "LinkedIn Icon"
                    }
                    className="w-10 h-10"
                    title={
                      i === 0
                        ? "Telegram Icon"
                        : i === 1
                        ? "Twitter Icon"
                        : "LinkedIn Icon"
                    }
                  />
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
