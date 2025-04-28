import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0B13] pt-16">
      {/* Contact Form Section */}
      <section id="contact" className="py-12">
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactPage;
